import React from "react"
import { connect } from "react-redux"

import { getUserState } from "../data/users/actions"


export default function HasUserState(Wrapped) {

    class HasUserStateComponent extends React.Component {

        constructor() {
            super()
            this.state = { loading: true }
        }

        componentDidMount() {
            const { getUserState } = this.props
            getUserState().then(() => {
                this.setState({ loading: false })
            })
        }

        render() {
            if (this.state.loading) {
                return null;  // show loading spinner
            }
            return <Wrapped { ...this.props } />
        }
    }

    return connect(null, { getUserState })(HasUserStateComponent)
}
