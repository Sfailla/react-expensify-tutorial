import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import ExpenseForm from '../components/ExpenseForm';

const AddExpensePage = props => (
	<Fragment>
		<h2>Add Expense Component</h2>
		<ExpenseForm
			onSubmit={expenses => {
				props.onSubmit;
				props.history.push('/');
			}}
		/>
	</Fragment>
);

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: expense => dispatch(addExpense(expense))
	};
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
