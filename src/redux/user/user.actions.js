import UserActionTypes from "./user.types";

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
})
export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
})
export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
})
export const logoutFailure = error => ({
    type: UserActionTypes.LOG_OUT_FAILURE,
    payload: error
})
export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START,
});
export const logoutSuccess = () => ({
    type: UserActionTypes.LOG_OUT_SUCCESS
})
export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION,
});