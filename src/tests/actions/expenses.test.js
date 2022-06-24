import {
    startAddExpense,
    addExpense,
    removeExpense,
    editExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import databse from '../../firebase/firebase';
import { ref, onValue, get, set } from 'firebase/database';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, note, description, createdAt, amount }) => {
        expensesData[id] = { note, description, amount, createdAt };
    });
    set(ref(databse, `users/${uid}/expenses`), { expensesData }).then(() => done());
});

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

// test('should start remove expense from firebase', (done) => {
//     const store = createMockStore(defaultAuthState);
//     const id = expenses[1].id;
//     store.dispatch(startAddExpense({ id })).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'REMOVE_EXPENSE',
//             id
//         });
//         return onValue(ref(databse, `users/${uid}/expenses/${id}`), {});
//     }).then((snapshot) => {
//         expect(snapshot.val()).toBeFalsy();
//         done()
//     });
// });

test('should setuo edit expense action object', () => {
    const action = editExpense('123abc', { note: 'rent' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'rent' }
    })
});

test('should setup add expence action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('should add expense to the database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        note: '',
        amount: '3000',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return get(ref(databse, `users/${uid}/expenses/${action[0].expense.id}`));
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with default to the database', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return get(ref(databse, `users/${uid}/expenses/${action[0].expense.id}`));
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

// test('should setup set expense action object with data', () => {
//     const action = setExpenses(expenses);
//     expect(action).toEqual({
//         type: 'SET_EXPENSES',
//         expenses
//     });
// });

// test('should fetch expenses from firebase', (done) => {
//     const store = createMockStore(defaultAuthState);
//     store.dispatch(startSetExpenses()).then(() => {
//         const action = store.getActions();
//         expect(action[0]).toEqual({
//             type: 'SET_EXPENSES',
//             expenses
//         });
//         done();
//     });
// });