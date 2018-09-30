import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({
	id,
	description,
	amount,
	createdAt,
	note
}) => (
	<div>
		<h3>
			<Link to={`/edit/${id}`}>{description}</Link>
		</h3>
		<p>NOTE: {note}</p>
		<p>AMOUNT: {numeral(amount / 100).format('$0,0.00')}</p>
		<p>CREATED: {moment(createdAt).format('MMMM Do, YYYY')}</p>
	</div>
);

export default ExpenseListItem;
