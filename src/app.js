import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
// import { setTextFilter } from './actions/filters';

import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const store = configureStore();

store.dispatch(
	addExpense({
		description: 'water bill',
		amount: 700,
		createdAt: 1533052800000
	})
);
store.dispatch(
	addExpense({
		description: 'gas bill',
		amount: 500,
		createdAt: 1531152000000
	})
);
store.dispatch(
	addExpense({
		description: 'apt rent',
		amount: 2500,
		createdAt: 1532102400000
	})
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const app = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
