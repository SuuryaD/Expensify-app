import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('Should render Expense from correctly' , () => {
    const wrapper = shallow(<ExpenseForm  />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expenses form with data', () => {
    const wrapper = shallow(<ExpenseForm previous = {expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(1);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value}
    })
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on text area change', () => {
    const value = 'Note data';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value}
    });
    expect(wrapper.state('note')).toBe(value);

});

test('should set amount on valid input', () => {
    const value = '10.53';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toEqual(value);

});

test('should set amount on invalid input', () => {
    const value = '10.533';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');

});

test('should call onSubmit prop for form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm previous={expenses[1]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[1].description,
        note: expenses[1].note,
        createdAt: expenses[1].createdAt,
        amount: expenses[1].amount
    })
});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('#aaaaaa').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);

});

test('should set focus on onFocus change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('#aaaaaa').prop('onFocusChange')({ focused: true});
    expect(wrapper.state('calendarFocused')).toEqual(true);
});