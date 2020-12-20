import {call, takeLatest, all, put} from 'redux-saga/effects'
import {
    googleProvider,
    auth,
    createUserProfileDocument,
    getCurrentUser
} from "../../firebase/firebase.utils";
import {signInSuccess, signInFailure, logoutSuccess, logoutFailure} from "./user.actions";
import UserActionTypes from "./user.types";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(
            createUserProfileDocument,
            userAuth,
            additionalData
        )
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* logout() {
    try {
        yield auth.signOut();
        yield put(logoutSuccess());
    } catch (error) {
        yield put(logoutFailure(error));
    }
}
export function* onSignOutStart() {
yield takeLatest(UserActionTypes.SIGN_OUT_START, logout)
}
export function* UserSagas() {
    yield all([call(onGoogleSignInStart), call(onCheckUserSession), call(onSignOutStart)]);
}