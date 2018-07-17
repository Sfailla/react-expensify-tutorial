import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
	<div>
		<h3>
			<Link to={`/edit/${id}`}>{description}</Link>
		</h3>
		<p>Amount: {amount}</p>
		<p>Created At: {createdAt}</p>
		<button
			onClick={() => {
				dispatch(removeExpense({ id }));
			}}
		>
			Remove
		</button>
	</div>
);

export default connect()(ExpenseListItem);
