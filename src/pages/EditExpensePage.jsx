import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import ExpenseForm from '../components/ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
	onSubmit = expense => {
		this.props.editExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	};

	onRemove = () => {
		this.props.removeExpense({ id: this.props.expense.id });
		this.props.history.push('/');
	};

	render() {
		return (
			<Fragment>
				<ExpenseForm
					expense={this.props.expense}
					onSubmit={this.onSubmit}
				/>
				<button onClick={this.onRemove}>Remove</button>
			</Fragment>
		);
	}
}

const mapStateToProps = (state, props) => ({
	expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => {
	return {
		editExpense: (id, expense) =>
			dispatch(editExpense(props.expense.id, expense)),
		removeExpense: id => dispatch(removeExpense({ id }))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
