import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ExpenseDashboardPage from '../pages/ExpenseDashboard';
import AddExpensePage from '../pages/AddExpensePage';
import EditExpensePage from '../pages/EditExpensePage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import HelpPage from '../pages/HelpPage';
import Header from '../components/Header';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<Fragment>
			<Header />
			<Switch>
				<Route exact={true} path="/" component={LoginPage} />
				<Route
					exact={true}
					path="/dashboard"
					component={ExpenseDashboardPage}
				/>
				<Route exact={true} path="/create" component={AddExpensePage} />
				<Route exact={true} path="/edit/:id" component={EditExpensePage} />
				<Route exact={true} path="/help" component={HelpPage} />
				<Route exact={true} component={NotFoundPage} />
			</Switch>
		</Fragment>
	</Router>
);

export default AppRouter;
