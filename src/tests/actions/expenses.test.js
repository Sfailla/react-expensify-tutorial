import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
	startAddExpense,
	addExpense,
	editExpense,
	removeExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

// calling .toBe is to compare a string or bool.
// use .toEqual when comparing objects and arrays.

const createMockStore = configureMockStore([ thunk ]);

const expenseData = {};
expenses.forEach(({ id, description, note, amount, createdAt }) => {
	expenseData[id] = { description, note, amount, createdAt };
});

beforeEach(done => {
	database.ref('expenses').set(expenseData).then(() => done());
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

test('should setup addExpense action object with provided values', () => {
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	});
});

test('should add expense to database and store', done => {
	const store = createMockStore();
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
			.ref(`expenses/${actions[0].expense.id}`)
			.once('value')
			.then(snapshot => {
				expect(snapshot.val()).toEqual(expenseData);
				done();
			});
	});
});

test('should add expense with defaults to database and store', done => {
	const store = createMockStore();
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
			.ref(`expenses/${actions[0].expense.id}`)
			.once('value')
			.then(snapshot => {
				expect(snapshot.val()).toEqual(defaultExpenseData);
				done();
			});
	});
});
