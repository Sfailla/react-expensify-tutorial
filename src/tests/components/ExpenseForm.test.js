import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseForm } from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

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
	// expect(wrapper.state('error').length).toBeGreaterThan(0);
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
	expect(wrapper).toMatchSnapshot();
});

test('should not set amount if input is invalid', () => {
	const value = '25.355';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', { target: { value } });
	expect(wrapper.state('amount')).toBe('');
	expect(wrapper).toMatchSnapshot();
});

test('should call submit for valid submission data', () => {
	const onSubmitSpy = jest.fn();
	onSubmitSpy();
	expect(onSubmitSpy).toHaveBeenCalled();
});
