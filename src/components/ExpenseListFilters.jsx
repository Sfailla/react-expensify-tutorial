import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
	setTextFilter,
	sortByAmount,
	sortByDate,
	setStartDate,
	setEndDate
} from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
	state = {
		calenderFocused: null
	};

	onDatesChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};

	onFocusChange = calenderFocused => {
		this.setState(() => ({ calenderFocused }));
	};

	onTextChange = event => {
		this.props.setTextFilter(event.target.value);
	};

	onSortChange = event => {
		event.target.value === 'date'
			? this.props.sortByDate()
			: this.props.sortByAmount();
	};

	render() {
		return (
			<div className="filters">
				<input
					className="filters__text"
					type="text"
					value={this.props.filters.text}
					onChange={this.onTextChange}
				/>

				<select
					className="filters__select"
					value={this.props.filters.sortBy}
					onChange={this.onSortChange}>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>

				<DateRangePicker
					startDateId="startDate"
					startDate={this.props.filters.startDate}
					endDateId="endDate"
					endDate={this.props.filters.endDate}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calenderFocused}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		filters: state.filters
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setTextFilter: text => dispatch(setTextFilter(text)),
		sortByDate: () => dispatch(sortByDate()),
		sortByAmount: () => dispatch(sortByAmount()),
		setStartDate: startDate => dispatch(setStartDate(startDate)),
		setEndDate: endDate => dispatch(setEndDate(endDate))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
