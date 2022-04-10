import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate
} from '../../actions/filters';
import moment from 'moment';

test('should setup generate set start date action object', () => {
    const action = setStartDate({ startDate: moment(0) });
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should setup generate set end date action object', () => {
    const action = setEndDate({ endDate: moment(0) });
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should setup generate sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_FILTER',
        sortBy: 'amount'
    })
})

test('should setup generate sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_FILTER',
        sortBy: 'date'
    })
})

test('should setup generate set text action object with value', () => {
    const text = 'abc';
    const action = setTextFilter({ text });
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('should setup generate set text action object with default value', () => {
    const text = '';
    const action = setTextFilter({ text });
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})