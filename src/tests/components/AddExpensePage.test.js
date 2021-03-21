const React = require('react');
import { shallow } from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let onSubmit,history,wrapper;
beforeEach(() => {
     onSubmit = jest.fn();
     history = { push: jest.fn() };
     wrapper = shallow(<AddExpensePage startAddExpense={onSubmit} history={history}/>);
})

test('should render Add expense page', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});