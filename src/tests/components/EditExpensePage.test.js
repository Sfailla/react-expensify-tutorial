import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../pages/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, wrapper, history;

beforeEach(() => {
	editExpense = jest.fn();
	removeExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage
			expense={expenses[0]}
			editExpense={editExpense}
			removeExpense={removeExpense}
			history={history}
		/>
	);
});

test('should correctly render EditExpensePage component', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
	expect(history.push).toHaveBeenCalledWith('/');
	expect(editExpense).toHaveBeenCalledWith(expenses[0].id, expenses[0]);
});

test('should handle removeExpense', () => {
	wrapper.find('button').prop('onClick')(expenses[0].id);
	expect(history.push).toHaveBeenCalledWith('/');
	expect(removeExpense).toHaveBeenCalledWith({ id: expenses[0].id });
});
