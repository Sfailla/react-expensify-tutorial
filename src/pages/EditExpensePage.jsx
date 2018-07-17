import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from '../components/ExpenseForm';
import { editExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
	console.log();
	return (
		<ExpenseForm
			expense={props.expense}
			onSubmit={(expense) => {
				props.dispatch(editExpense(props.expense.id, expense));
				props.history.push('/');
			}}
		/>
	);
};

const mapStateToProps = (state, props) => ({
	expense: state.expenses.find((expense) => {
		return expense.id === props.match.params.id;
	})
});

export default connect(mapStateToProps)(EditExpensePage);
