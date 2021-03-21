import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import {filters , altfilters} from '../fixtures/filters';
// import moment from 'moment';


let setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            setTextFilter={setTextFilter}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            filters={filters}     
        />
        )
});

test('should render expense list filters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list filters with data', () => {
    wrapper.setProps({
        filters: altfilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'abcd'
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
});

test('Should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altfilters
    });
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate: 0, endDate: 0});
    expect(setStartDate).toHaveBeenLastCalledWith(0);
    expect(setEndDate).toHaveBeenLastCalledWith(0);
});

test('should handle date focus change', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(true);
    expect(wrapper.state('calendarFocused')).toBe(true);
});