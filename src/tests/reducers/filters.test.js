import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set default', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
})

test('Should set sort by to date',() => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set sort by to amount', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(currentState, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set text filter', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(currentState, {type: 'SET_TEXT_FILTER', text: 'abcd'});
    expect(state.text).toBe('abcd')
    
});

test('should set start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(filters , {type: 'SET_START_DATE', startDate: moment(0)})
    expect(state.startDate).toEqual(moment(0));
});

test('should set end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(filters , {type: 'SET_END_DATE', endDate: moment(0)})
    expect(state.endDate).toEqual(moment(0));
});
