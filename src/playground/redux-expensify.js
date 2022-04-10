import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from 'uuid';

// Add Expense
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }

});

//Remove Expense
const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//Edit Expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//Filter Text
const setTextFilter = ({ text = '' }) => ({
    type: 'SET_TEXT_FILTER',
    text
});

//Sort By Amount
const sortByAmount = () => ({
    type: 'SORT_BY_FILTER',
    sortBy: 'amount'
});

//Sort By Date
const sortByDate = () => ({
    type: 'SORT_BY_FILTER',
    sortBy: 'date'
});

//Set Start Date
const setStartDate = ({ startDate }) => ({
    type: 'SET_START_DATE',
    startDate
});

//Set End Date
const setEndtDate = ({ endDate }) => ({
    type: 'SET_END_DATE',
    endDate
});

//Set End Date

// Expenses reducer
const expensesReducerDefaultState = [];

const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
};

// Filters reducer
const filterReducerDefatultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducerDefatultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_FILTER':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? -1 : -1
        }
    });
};

// Store creation
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));
//store.dispatch(removeExpense({ id: expenseOne.expense.id }));
//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 1000 }));

//store.dispatch(setTextFilter({ text: 'rent' }));
//store.dispatch(setTextFilter({ text: '' }));

//store.dispatch(sortByDate());
store.dispatch(sortByAmount());

//store.dispatch(setStartDate({ startDate: 0 }));
//store.dispatch(setEndtDate({ endDate: 0 }));


const demoState = {
    expenses: [{
        id: '1',
        description: 'Jan rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // amount or date
        startDate: undefined,
        endDate: undefined
    }
};