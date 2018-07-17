import configureStore from '../store/configureStore';
import uuid from 'uuid';
import getVisibleExpenses from '../selectors/expenses';
import { setTextFilter } from '../actions/filters';

const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

const addExpense = ({ description = '', amount = '' } = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		amount
	}
});

const removeExpense = ({ id }) => ({
	type: 'REMOVE_EXPENSE',
	id
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [ ...state, action.expense ];
		case 'REMOVE_EXPENSE':
			return state.map((expense) => {
				console.log(expense);
			});
		// return state.filter(({ id }) => id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				console.log(expense);
			});
		default:
			return state;
	}
};

const store = configureStore();

const expenseOne = store.dispatch(addExpense({ description: 'Phone Bill', amount: 2500 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Water Bill', amount: 5000 }));
store.dispatch(addExpense({ description: 'RENT', amount: '59999' }));
// store.dispatch(editExpense());
store.dispatch(removeExpense());

// store.subscribe(() => {
// 	console.log(store.getState());
// });

const state = store.getState();
const visibleExpenses = state.expenses;
console.log(visibleExpenses);
// console.log(state.expenses[0].description);
// console.log(state.expenses[1].description);
