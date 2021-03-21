import {createStore , combineReducers, compose , applyMiddleware} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default() => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        composeEnhanser(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
