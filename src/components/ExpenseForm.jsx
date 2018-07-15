import React, { Component } from 'react';
import connect from 'react-redux';
import { addExpense } from '../actions/expenses';

import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

class ExpenseForm extends Component {
	state = {
		description: '',
		note: '',
		amount: '',
		createdAt: moment(),
		calenderFocused: false,
		error: ''
	};

	onDescriptionChange = (evt) => {
		const description = evt.target.value;
		this.setState(() => ({ description }));
	};

	onNoteChange = (evt) => {
		const note = evt.target.value;
		this.setState(() => ({ note }));
	};

	onAmountChange = (evt) => {
		const amount = evt.target.value;
		// this regex only allows numbers in the input field.
		// also only lets you put 2 values after decimal
		// (basically it formats the number value to money syntax)
		if (amount.match(/^\d*(\.\d{0,2})?$/g)) {
			this.setState(() => ({ amount }));
		}
	};

	onDateChange = (createdAt) => {
		if (createdAt) {
			this.setState(() => ({ createdAt }));
		}
	};

	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calenderFocused: focused }));
	};

	onSubmit = (evt) => {
		evt.preventDefault();

		if (!this.state.description || !this.state.amount) {
			this.setState(() => ({ error: 'Please provide description and amount' }));
			console.log(this.state.createdAt._d);
		} else {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			});
		}
	};

	render() {
		return (
			<div>
				{this.state.error && <p style={{ color: 'red' }}>-{this.state.error}-</p>}
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input
						name="amount"
						type="text"
						onChange={this.onAmountChange}
						value={this.state.amount}
						placeholder="Amount"
					/>

					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calenderFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>
					<textarea
						onChange={this.onNoteChange}
						value={this.state.note}
						placeholder="Add a note for your expense (optional)"
					/>

					<button type="submit">Add Expense</button>
				</form>
			</div>
		);
	}
}

export default ExpenseForm;
