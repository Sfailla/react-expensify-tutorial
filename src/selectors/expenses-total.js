export default expenses => {
	if (expenses.length === 0) {
		return 0;
	} else if (expenses.length > 0) {
		return expenses
			.map(expense => expense.amount)
			.reduce((sum, val) => sum + val, 0);
	}
};
