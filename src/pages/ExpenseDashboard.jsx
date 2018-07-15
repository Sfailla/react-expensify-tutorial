import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters';

const ExpenseDashboardPage = (props) => (
	<div>
		<ExpenseList />
		<ExpenseListFilters />
	</div>
);
export default ExpenseDashboardPage;
