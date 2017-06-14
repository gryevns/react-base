import { fetchUserState, fetchLastUpdated } from "./api"

// Event Constants
export const SET_USER = "users/SET_USER"
export const SET_USER_LOADING = "users/SET_USER_LOADING"
export const SET_USER_LAST_UPDATED = "users/SET_USER_LAST_UPDATED"

export const setUser = (name) => ({
    type: SET_USER,
    name,
})

export const setLastUpdated = (value) => ({
    type: SET_USER_LAST_UPDATED,
    value,
})

export const getUserState = () => {
    return dispatch => Promise.all([
        dispatch(fetchUserState()),
        dispatch(fetchLastUpdated()),
    ]);
}
