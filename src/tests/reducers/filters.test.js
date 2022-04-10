import filtersReducers from "../../reducers/filters";
import moment from "moment";

test('should setup default filter values', () => {
    const state = filtersReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortby to amount', () => {
    const state = filtersReducers(undefined, {
        type: 'SORT_BY_FILTER',
        sortBy: 'amount'
    });
    expect(state.sortBy).toBe('amount');
});

test('should set sortby to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_FILTER', sortBy: 'date' };
    const state = filtersReducers(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const action = { type: 'SET_TEXT_FILTER', text: 'abc' };
    const state = filtersReducers(undefined, action);
    expect(state.text).toBe('abc');
});

test('should set start date filter', () => {
    const action = { type: 'SET_START_DATE', startDate: moment(0).add(2, 'days') };
    const state = filtersReducers(undefined, action);
    expect(state.startDate).toEqual(moment(0).add(2, 'days'));
});

test('should set end date filter', () => {
    const action = { type: 'SET_END_DATE', endDate: moment(0).subtract(2, 'days') };
    const state = filtersReducers(undefined, action);
    expect(state.endDate).toEqual(moment(0).subtract(2, 'days'));
});