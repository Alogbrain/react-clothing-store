import {all, takeLatest, call, put} from 'redux-saga/effects'
import ShopActionTypes from "./shop.types";
import axios from "axios";

import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {fetchCollectionsSuccess, fetchCollectionsFailure} from "./shop.actions";

export function* fetchCollectionsAsync() {
    try {
        // const collectionRef = firestore.collection("collections");
        // const snapshot = yield collectionRef.get();
        //
        // console.log(snapshot)

        const snapshot = yield call (fetch, '/collection/getAll');
        const responseBody = yield snapshot.json();

        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            responseBody
        );
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}
