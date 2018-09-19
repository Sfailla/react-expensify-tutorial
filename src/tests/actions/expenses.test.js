import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// calling .toBe is to compare a string or bool.
// use .toEqual when comparing objects and arrays.

test('should remove expense action object', () => {
	const action = removeExpense({
		id: '123abc'
	});
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('should edit expense action object', () => {
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
	const expenseData = {
		description: 'rent',
		amount: 109500,
		createdAt: 1000,
		note: 'this was last months rent'
	};

	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	});
});

test('should setup addExpense action object with default values', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: '',
			note: '',
			amount: 0,
			createdAt: 0
		}
	});
});
