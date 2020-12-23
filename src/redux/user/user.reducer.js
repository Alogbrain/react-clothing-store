import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                error: null,
                currentUser: action.payload
            }
        case UserActionTypes.LOG_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.LOG_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
export default UserReducer
