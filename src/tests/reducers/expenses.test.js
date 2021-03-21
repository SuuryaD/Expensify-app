import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default', () => {
    const action = {
        type: '@@INIT'
    }
    const state = expensesReducer(undefined, action);
    expect(state).toEqual([]);
});

test('Should remove expenses by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action );
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('Should not remove expenses by id if not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '4'
    }
    const state = expensesReducer(expenses, action );
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            description: 'add',
            amount: 1111,
            note: '',
            createdAt: 0
        }
    };
    const state = expensesReducer(expenses , action);
    expect(state).toEqual([...expenses, { description: 'add', note: '', amount: 1111, createdAt: 0}])
});

test('Edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            description: 'Gummon'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ { description: 'Gummon', note: '', amount: 1000, createdAt: 0, id: '1'}, expenses[1], expenses[2]])
});

test('Edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '4',
        updates: {
            description: 'Gummon'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});