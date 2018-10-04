import React, { Fragment } from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters';
import ExpensesSummary from '../components/ExpensesSummary';

const ExpenseDashboardPage = () => (
	<Fragment>
		<div className="container">
			<ExpensesSummary />
			<ExpenseListFilters />
			<ExpenseList />
		</div>
	</Fragment>
);
export default ExpenseDashboardPage;
