import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = props => {
	return (
		<Fragment>
			<h1>Expense List</h1>
			{props.expenses.length > 0 ? (
				props.expenses.map(expense => {
					return <ExpenseListItem key={expense.id} {...expense} />;
				})
			) : (
				<p>Sorry No Expenses works</p>
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
