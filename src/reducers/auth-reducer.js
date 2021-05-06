const initialState = {
    loggedIn: false,
}

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOG_IN":
            return {
                ...state,
                loggedIn: true
            }
        case "LOG_OUT":
            return {
                ...state,
                loggedIn:false
            }
        default:
            return state
    }
}

export {initialState, authReducer}