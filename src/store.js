import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from "react-router-redux"
import { createBrowserHistory } from "history"
import thunk from 'redux-thunk'

import dataReducer from './data/reducer';


export const history = createBrowserHistory()

const middleware = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    combineReducers({
        data: dataReducer,
        router: routerReducer,
    }),
    composeEnhancers(
        applyMiddleware(
            middleware,
            thunk,
        )
    )
)
