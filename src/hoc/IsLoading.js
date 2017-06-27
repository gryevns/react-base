import React from "react"
import { connect } from "react-redux"

import { getUserState } from "../data/users/actions"

/**
 * Loading State HOC
 * Useful for one-off store async population
 * e.g. user state - only needs to be fetched and stored once
 *
 * @param Wrapped      Component to render on successful async
 * @param fetch        Thunk action creator, e.g. () => dispatch => Promise.resolve()
 */
export default function IsLoading(Wrapped, f) {

    class IsLoadingComponent extends React.Component {

        constructor() {
            super()
            this.state = { loading: true }
        }

        componentDidMount() {
            const { dispatch } = this.props
            dispatch(f()).then(this.setState({ loading: false }))
        }

        render() {
            if (this.state.loading) {
                return <p>loading</p>  // show loading spinner here
            }
            return <Wrapped { ...this.props } />
        }
    }

    return connect()(IsLoadingComponent)
}

export const HasUserState = (Wrapped) => IsLoading(Wrapped, getUserState)
