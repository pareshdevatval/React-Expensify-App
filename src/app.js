import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';
import 'normalize.css/normalize.css';
import configureStore from './stores/configureStore';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

console.log("Hi");

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


