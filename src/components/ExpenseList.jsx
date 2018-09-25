import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = props => {
	const { expenses } = props;
	return (
		<Fragment>
			<h1>Expense List</h1>
			{expenses.length > 0 ? (
				expenses.map(expense => {
					return <ExpenseListItem key={expense.id} {...expense} />;
				})
			) : (
				<p>Sorry No Expenses</p>
			)}
		</Fragment>
	);
};

const mapStateToProps = state => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

export default connect(mapStateToProps)(ExpenseList);
