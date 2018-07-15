import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 700, createdAt: 100 }));
store.dispatch(addExpense({ description: 'gas bill', amount: 500, createdAt: 275 }));
store.dispatch(addExpense({ description: 'apt rent', amount: 2500, createdAt: -477 }));
// store.dispatch(setTextFilter());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
