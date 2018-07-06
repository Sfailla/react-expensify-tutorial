import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 }) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

const removeExpense = ({ id }) => ({
	type: 'REMOVE_EXPENSE',
	id
});

const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [ ...state, action.expense ];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates
					};
				}
			});
		default:
			return state;
	}
};

// FILTER REDUCER
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});
const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

const setStartDate = () => ({
	type: 'SET_START_DATE'
});

const filtersReducerDefaultState = {
	id: uuid(),
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			};
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			};
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			};
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			};
		default:
			return state;
	}
};

const getVisibleExpenses = (expenses, filters) => {
	return expenses;
};

// REDUX Store

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
	addExpense({ description: 'rent', amount: 100, note: 'Final payment for that address', createdAt: 0 })
);
const expenseTwo = store.dispatch(
	addExpense({ description: 'coffee', amount: 250, note: 'Need coffee to survive', createdAt: 0 })
);

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500, note: 'Need coffee to wake up' }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(removeExpense({ id: expenseTwo.expense.id }));

store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate());
// store.dispatch();
// store.dispatch();
