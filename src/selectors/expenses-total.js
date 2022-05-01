export default (expenses) => {
    return expenses
    .map((expense) => parseInt(expense.amount))
    .reduce((sum, value) => sum + value, 0);
};