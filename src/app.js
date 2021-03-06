import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import './styles/styles.css';
import configureStore from './store/configureStore';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
// import 'normalize.css/normalize.css';
// import './styles/styles.scss';

const store = configureStore();

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
