import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render expenses summary component correctly with single expense', () => {
	const wrapper = shallow(
		<ExpensesSummary expenseCount={1} expenseTotal={195} />
	);
	expect(wrapper).toMatchSnapshot();
});

test('should render expenses summary component correctly with multiple expenses', () => {
	const wrapper = shallow(
		<ExpensesSummary expenseCount={12} expenseTotal={1500195} />
	);
	expect(wrapper).toMatchSnapshot();
});
