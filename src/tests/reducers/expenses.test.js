import expensesReducers from "../../reducers/expenses";
import expenses from '../fixtures/expenses';
import moment from "moment";

test('should set dafault state', () => {
    const state = expensesReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expence by id', () => {
    const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expence if id not found', () => {
    const action = { type: 'REMOVE_EXPENSE', id: '-1' };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expence', () => {
    const expense = {
        id: '4',
        description: 'Coffee',
        note: '',
        amount: '10000',
        createAt: moment(0).subtract(1, 'days')
    }
    const action = { type: 'ADD_EXPENSE', expense };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expence', () => {
    const amount = 50000;
    const action = { type: 'EDIT_EXPENSE', id: expenses[1].id, updates: { amount } };
    const state = expensesReducers(expenses, action);
    expect(state[1].amount).toEqual(50000);
});

test('should not edit an expence if id not found', () => {
    const amount = 50000;
    const action = { type: 'EDIT_EXPENSE', id: '-1', updates: { amount } };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});