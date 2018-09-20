import React from 'react';
import { shallow, mount } from 'enzyme';
import { ExpenseForm } from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm correctly', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
	expect(wrapper).toMatchSnapshot();
});

test('should throw error when fields are blank', () => {
	let error = 'Please provide description and amount';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('form').simulate('submit', { preventDefault: () => {} });
	expect(wrapper.state('error')).toBe(error);
	expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
	const value = 'New description';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(0).simulate('change', { target: { value } });
	expect(wrapper.state('description')).toBe(value);
	expect(wrapper).toMatchSnapshot();
});

test('should set note on textArea change', () => {
	const value = 'New note value';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('textarea').simulate('change', { target: { value } });
	expect(wrapper.state('note')).toBe(value);
	expect(wrapper).toMatchSnapshot();
});

test('should set amount if input is valid', () => {
	const amount = '25.35';
	const wrapper = shallow(<ExpenseForm />);
	wrapper
		.find('input')
		.at(1)
		.simulate('change', { target: { value: amount } });
	expect(wrapper.state('amount')).toBe(amount);
});

test('should not set amount if input is invalid', () => {
	const value = '25.355';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', { target: { value } });
	expect(wrapper.state('amount')).toBe('');
});

test('should call submit for valid submission data', () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(
		<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
	);
	wrapper.find('form').simulate('submit', { preventDefault: () => {} });
	expect(wrapper.state('error')).toBe('');
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenses[0].description,
		amount: expenses[0].amount,
		createdAt: expenses[0].createdAt,
		note: expenses[0].note
	});
});

// wont test because of react-dates/initialize update for SingleDatePicker Component.

// test('should set new date on date change', () => {
// 	const now = moment();
// 	const wrapper = shallow(<ExpenseForm />);
// 	wrapper.find('SingleDatePicker').prop('onDateChange')(now);
// 	expect(wrapper.state('createdAt')).toEqual(now);
// });

// test('should set calender focus onChange', () => {
// 	const focused = true;
// 	const wrapper = mount(<ExpenseForm />);
// 	wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
// 	expect(wrapper.state('calenderFocused')).toBe(focused);
// });
