const selectExpensesTotal = expenses => {
	if (!expenses.length) {
		return 0;
	} else if (expenses.length) {
		return expenses
			.map(expense => expense.amount)
			.reduce((sum, val) => sum + val, 0);
	}
};

export default selectExpensesTotal;
