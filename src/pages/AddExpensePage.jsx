import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import ExpenseForm from '../components/ExpenseForm';

export class AddExpensePage extends React.Component {
	onSubmit = expense => {
		this.props.startAddExpense(expense);
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
		startAddExpense: expense => dispatch(startAddExpense(expense))
	};
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
