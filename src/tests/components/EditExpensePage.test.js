import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense,removeExpense,history,wrapper;
beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn()};
    wrapper = shallow(<EditExpensePage editExpense={editExpense} history={history} removeExpense={removeExpense} expense={expenses[2]} />)
});

test('Should render edit expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2], expenses[2].id );
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[2].id);
    expect(history.push).toHaveBeenLastCalledWith('/');
});