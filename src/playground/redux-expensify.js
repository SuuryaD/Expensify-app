import {createStore , combineReducers} from 'redux';
import {v4 as uuidv4} from 'uuid';



//ADD_EXPENSE

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } 
    = {}
    ) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuidv4(),
            description,
            note,
            amount,
            createdAt
        }
        
});

//Remove Expense

const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id 
});

//Edit Expense

const editExpense = (id , updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//Text Filter

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//Sort By Amount

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//Sort By Date

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//Set Start Date

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

//Set End Date

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

const getVisibleExpenses = (expenses , {text , sortBy , startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate ;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1: -1
        } else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1: -1
        }
    });
}
//Expenses Reducer
const expenseReducerDefaultState = [];

const expensesReducer = (state  = expenseReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state , action.expense];
        case 'REMOVE_EXPENSE': 
            return state.filter((item) => item.id !== action.id);
        case 'EDIT_EXPENSE': 
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }

            });
        default:
            return state;
    }
};



// Filters Reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filterReducerDefaultState , action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

//Creating Store

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -11000}))

const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 1000, createdAt: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, { description: 'cofee edit', amount: 500 }));

// store.dispatch(setTextFilter('rent'));

// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate());
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));





