import React, { Fragment } from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters';

const ExpenseDashboardPage = () => (
	<Fragment>
		<ExpenseList />
		<ExpenseListFilters />
	</Fragment>
);
export default ExpenseDashboardPage;
