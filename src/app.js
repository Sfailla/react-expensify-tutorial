import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import { startSetExpenses } from './actions/expenses';

import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './firebase/firebase';

const store = configureStore();

const app = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

const loader = <p>Loading...</p>;

ReactDOM.render(loader, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(app, document.getElementById('root'));
});
