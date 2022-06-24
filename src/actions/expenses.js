import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';
import { ref, push, get, onValue, set, update } from 'firebase/database';

// Add Expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    // Redux thunk will allow to return function instade of object
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        //Destructuring of data
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt };
        return push(ref(database, `users/${uid}/expenses`), expense).then((ref) => {
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

export const startRemoveExpense = ({ id }) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return set(ref(database, `users/${uid}/expenses/${id}`), null).then(() => {
            dispatch(removeExpense(id));
        });
    }
}

//Edit Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return update(ref(database, `users/${uid}/expenses/${id}`), {
            description: updates.description,
            amount: updates.amount,
            note: updates.note,
            createdAt: updates.createdAt,
        }).then(() => {
            dispatch(editExpense(id, updates));
        });
    }
};

//SET_EXPENSES
export const setExpenses = (expense) => ({
    type: 'SET_EXPENSES',
    expense
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return get(ref(database, `users/${uid}/expenses`)).then((snapshot) => {
            const expense = [];
            snapshot.forEach((childSnapshot) => {
                expense.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setExpenses(expense));
        });
    };
}; 