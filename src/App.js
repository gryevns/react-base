import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

import { getName } from "./data/users/selectors"

class App extends Component {
    render() {
        const { name } = this.props
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React - {name}</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    name: getName(state.data.user),
})

export default connect(mapStateToProps)(App)
