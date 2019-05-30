import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import { startSetExpenses } from './actions/expenses';
import { history } from './router/AppRouter';
import { login, logout } from './actions/auth';

import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { firebase } from './firebase/firebase';

const store = configureStore();

const app = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(app, document.getElementById('root'));
		hasRendered = true;
	}
};

const loader = <div className="loader" />;
ReactDOM.render(loader, document.getElementById('root'));

firebase.auth().onAuthStateChanged(user => {
	if (user) {
		store.dispatch(login(user.uid));
		store.dispatch(startSetExpenses()).then(() => {
			renderApp();
			if (history.location.pathname === '/') {
				history.push('/dashboard');
			}
		});
	} else {
		store.dispatch(logout());
		renderApp();
		history.push('/');
	}
});
