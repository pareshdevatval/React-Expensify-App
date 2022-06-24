import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import authreducer from "../reducers/auth";
import { createHashHistory } from "history";
import thunk from 'redux-thunk';

export default () => {
    const initialState = {}
    const history = createHashHistory();
    const middleware = [thunk, routerMiddleware(history)]
    const enhancers = []

    if (process.env.NODE_ENV === 'development') {
        const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension())
        }
    }

    const composedEnhancers = compose(
        applyMiddleware(...middleware),
        ...enhancers
    )

    // Store creation
    const store = createStore(
        connectRouter(history)(combineReducers({
            expenses: expenseReducer,
            filters: filterReducer,
            auth: authreducer,
        })),
        initialState,
        composedEnhancers
    );
    /* const store = createStore(
        applyMiddleware(combineReducers({
            expenses: expenseReducer,
            filters: filterReducer
        })),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ); */
    return store
}

