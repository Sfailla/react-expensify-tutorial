import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses exist', () => {
	const response = selectExpensesTotal([]);
	expect(response).toBe(0);
});

test('should return amount if single expense exists', () => {
	const response = selectExpensesTotal([ expenses[1] ]);
	expect(response).toBe(1000);
});

test('should return total of multiple expenses', () => {
	const response = selectExpensesTotal(expenses);
	expect(response).toBe(1645);
});
