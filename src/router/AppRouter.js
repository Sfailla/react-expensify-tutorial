import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ExpenseDashboardPage from '../pages/ExpenseDashboard';
import AddExpensePage from '../pages/AddExpensePage';
import EditExpensePage from '../pages/EditExpensePage';
import NotFoundPage from '../pages/NotFoundPage';
import HelpPage from '../pages/HelpPage';
import Header from '../components/Header';

const AppRouter = () => (
	<Router>
		<Fragment>
			<Header />
			<Switch>
				<Route path='/' component={ExpenseDashboardPage} exact={true} />
				<Route path='/create' component={AddExpensePage} />
				<Route path='/edit/:id' component={EditExpensePage} />
				<Route path='/help' component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</Fragment>
	</Router>
);

export default AppRouter;
