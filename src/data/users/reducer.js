import * as actions from "./actions"


export const userInit = {
    etl: null,
    name: null,
    staff: false,
    retailers: [],
    outlets: [],
}

const user = (state = userInit, action) => {
    switch(action.type) {
        case actions.SET_USER_LAST_UPDATED:
            return {
                ...state,
                etl: action.value,
            }
        case actions.SET_USER:
            return {
                ...state,
                name: action.name,
            }
        default:
            return userInit;
    }
};

export default user
