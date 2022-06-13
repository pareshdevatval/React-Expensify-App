import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';
import { ref, push } from 'firebase/database';

// Add Expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    // Redux thunk will allow to return function instade of object
    return (dispatch) => {
        //Destructuring of data
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt };
        return push(ref(database, 'expenses'), expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        });
    };
};

//Remove Expense
export const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//Edit Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});