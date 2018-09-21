import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import ExpenseForm from '../components/ExpenseForm';

export class AddExpensePage extends React.Component {
	onSubmit = expense => {
		this.props.onSubmit(expense);
		this.props.history.push('/');
	};

	render() {
		return (
			<Fragment>
				<h2>Add Expense Component</h2>
				<ExpenseForm onSubmit={this.onSubmit} />
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: expense => dispatch(addExpense(expense))
	};
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
