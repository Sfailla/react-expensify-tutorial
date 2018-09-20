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

class ExpenseListFilters extends React.Component {
	state = {
		calenderFocused: null
	};

	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	};

	onFocusChange = calenderFocused => {
		this.setState(() => ({ calenderFocused }));
	};

	render() {
		return (
			<Fragment>
				<input
					style={{ height: '25px' }}
					type='text'
					value={this.props.filters.text}
					onChange={evt => {
						this.props.dispatch(setTextFilter(evt.target.value));
					}}
				/>

				<select
					value={this.props.filters.sortBy}
					onChange={evt => {
						evt.target.value === 'date'
							? this.props.dispatch(sortByDate())
							: this.props.dispatch(sortByAmount());
					}}>
					<option value='date'>Date</option>
					<option value='amount'>Amount</option>
				</select>

				<DateRangePicker
					startDateId='startDate'
					startDate={this.props.filters.startDate}
					endDateId='endDate'
					endDate={this.props.filters.endDate}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calenderFocused}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
