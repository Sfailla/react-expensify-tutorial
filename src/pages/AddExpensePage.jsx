import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import ExpenseForm from '../components/ExpenseForm';

const AddExpensePage = (props) => (
	<div>
		<h2>Add Expense Component</h2>
		<ExpenseForm
			onSubmit={(expenses) => {
				console.log(expenses);
				props.dispatch(addExpense(expenses));
				props.history.push('/');
			}}
		/>
	</div>
);

export default connect()(AddExpensePage);
