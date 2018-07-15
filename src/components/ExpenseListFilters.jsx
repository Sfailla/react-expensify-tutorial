import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (
	<div>
		<input
			style={{ height: '25px' }}
			type="text"
			value={props.filters.text}
			onChange={(evt) => {
				props.dispatch(setTextFilter(evt.target.value));
			}}
		/>
		<select
			value={props.filters.sortBy}
			onChange={(evt) => {
				evt.target.value === 'date' ? props.dispatch(sortByDate()) : props.dispatch(sortByAmount());
			}}
		>
			<option value="date">Date</option>
			<option value="amount">Amount</option>
		</select>
	</div>
);

const mapStateToProps = (state) => ({
	filters: state.filters
});

console.log();

export default connect(mapStateToProps)(ExpenseListFilters);
