import React from "react"
import ReactDOM from "react-dom"
import { Route } from "react-router"
import { ConnectedRouter } from "react-router-redux"
import { Provider } from "react-redux"

import store, { history } from "./store"
import HasUserState from "./hoc/HasUserState"
import App from "./App"
import "./index.css"


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={HasUserState(App)}/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
)
