import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
	addExpense,
	editExpense,
	setExpenses,
	removeExpense,
	startRemoveExpense,
	startAddExpense,
	startSetExpenses,
	startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

// calling .toBe is to compare a string or bool.
// use .toEqual when comparing objects and arrays.

const uid = 'mytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([ thunk ]);

beforeEach(done => {
	const expenseData = {};
	expenses.forEach(({ id, description, note, amount, createdAt }) => {
		expenseData[id] = { description, note, amount, createdAt };
	});
	return database
		.ref(`users/${uid}/expenses`)
		.set(expenseData)
		.then(() => done());
});

test('should remove expense action object', () => {
	const action = removeExpense({
		id: '123abc'
	});
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('should remove expense from firebase', done => {
	const store = createMockStore(defaultAuthState);
	const id = expenses[0].id;
	store
		.dispatch(startRemoveExpense({ id }))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'REMOVE_EXPENSE',
				id
			});
			return database.ref(`users/${uid}/expenses/${id}`).once('value');
		})
		.then(snapshot => {
			expect(snapshot.val()).toBeFalsy();
			done();
		});
});

test('should setup edit expense action object', () => {
	const action = editExpense('123abc', {
		note: 'new note'
	});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			note: 'new note'
		}
	});
});

test('should edit expense data in firebase', done => {
	const store = createMockStore(defaultAuthState);
	const id = expenses[2].id;
	const updates = {
		note: 'this is for a credit card expense'
	};
	store
		.dispatch(startEditExpense(id, updates))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'EDIT_EXPENSE',
				id,
				updates
			});
			return database.ref(`users/${uid}/expenses/${id}`).once('value');
		})
		.then(snapshot => {
			const val = snapshot.val();
			expect(val.note).toBe(updates.note);
			done();
		});
});

test('should setup addExpense action object with provided values', () => {
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	});
});

test('should add expense to database and store', done => {
	const store = createMockStore(defaultAuthState);
	const expenseData = {
		description: 'mouse',
		amount: 300,
		note: 'this is for a new mouse',
		createdAt: 1000
	};

	store.dispatch(startAddExpense(expenseData)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseData
			}
		});

		return database
			.ref(`users/${uid}/expenses/${actions[0].expense.id}`)
			.once('value')
			.then(snapshot => {
				expect(snapshot.val()).toEqual(expenseData);
				done();
			});
	});
});

test('should add expense with defaults to database and store', done => {
	const store = createMockStore(defaultAuthState);
	const defaultExpenseData = {
		description: '',
		amount: 0,
		note: '',
		createdAt: 0
	};

	store.dispatch(startAddExpense({})).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...defaultExpenseData
			}
		});
		database
			.ref(`users/${uid}/expenses/${actions[0].expense.id}`)
			.once('value')
			.then(snapshot => {
				expect(snapshot.val()).toEqual(defaultExpenseData);
				done();
			});
	});
});

test('should setup set expense action with data', () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: 'SET_EXPENSES',
		expenses
	});
});

test('should fetch the expenses from firebase correctly', done => {
	const store = createMockStore(defaultAuthState);
	store.dispatch(startSetExpenses()).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'SET_EXPENSES',
			expenses
		});
		done();
	});
});
