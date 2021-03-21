import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
// import configureStore from 'redux-mock-store' 
// import thunk from 'redux-thunk';

// const createMockStore = configureStore([thunk]);


test('Create Remove Expenses action object', () => {
    const action = removeExpense({ id: '1233' });
    expect(action).toEqual({ 
        type: 'REMOVE_EXPENSE',
        id: '1233'
    })
})

test('Create Edit expense action object', () => {
    const action = editExpense('1233', {note: 'new note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1233',
        updates: {
            note: 'new note'
        }
    })
})

// test('should add data to database and store', () => {
//     const store = createMockStore({});

//     const expenseData = {
//         description: 'Card',
//         amount: 100,
//         note: 'hello',
//         createdAt: 1000
//     };
//     // done();
//     store.dispatch(startAddExpense(expenseData)).then(() => {
//         expect(1).toBe(1);
//         done();
//     });
//     // store.dispatch(startAddExpense(expenseData));
//     // // done();
//     // expect(store.getActions()).toEqual()
// });





test('Creat add expense action object with defaults', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: { 
            id: expect.any(String), 
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
              
        }
    })
})