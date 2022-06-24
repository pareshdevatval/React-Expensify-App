import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';
import 'normalize.css/normalize.css';
import configureStore from './stores/configureStore';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import { startSetExpenses } from './actions/expenses';
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <Router>
            <AppRouter />
        </Router>
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

function select(state) {
    return state.uid;
  }

let currentValue;
function handleChange() {
    let previousValue = currentValue
    currentValue = select(store.getState())

    if (previousValue !== currentValue) {
        console.log("r-state", store.getState());
        if (currentValue) {
            store.dispatch(startSetExpenses()).then(() => {
                renderApp();
            });
        }
    }
    console.log("current state", store.getState());
}

store.subscribe(handleChange);

renderApp();




