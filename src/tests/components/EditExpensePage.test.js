import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../pages/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, wrapper, history;

beforeEach(() => {
	startEditExpense = jest.fn();
	startRemoveExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage
			expense={expenses[0]}
			startEditExpense={startEditExpense}
			startRemoveExpense={startRemoveExpense}
			history={history}
		/>
	);
});

test('should correctly render EditExpensePage component', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startEditExpense).toHaveBeenLastCalledWith(
		expenses[0].id,
		expenses[0]
	);
});

test('should handle startRemoveExpense', () => {
	wrapper.find('button').prop('onClick')(expenses[0].id);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
});
