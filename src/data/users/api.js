import { setLastUpdated, setUser } from "./actions"


export const fetchUserState = () => {
    return dispatch => {
        dispatch(setUser('user abc'))
    }
}

export const fetchLastUpdated = () => {
    return dispatch => {
        dispatch(setLastUpdated('2017-01-01 12:00:00'))
    }
}
