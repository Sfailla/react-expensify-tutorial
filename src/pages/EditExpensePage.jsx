import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import ExpenseForm from '../components/ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = props => {
	return (
		<Fragment>
			<ExpenseForm
				expense={props.expense}
				onSubmit={expense => {
					props.dispatch(editExpense(props.expense.id, expense));
					props.history.push('/');
				}}
			/>
			<button
				onClick={() => {
					props.dispatch(removeExpense({ id: props.expense.id }));
					props.history.push('/');
				}}>
				Remove
			</button>
		</Fragment>
	);
};

const mapStateToProps = (state, props) => ({
	expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);
