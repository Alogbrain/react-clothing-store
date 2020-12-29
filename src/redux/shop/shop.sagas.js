import {all, takeLatest, call, put} from 'redux-saga/effects'
import ShopActionTypes from "./shop.types";
import axios from "axios";

import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {fetchCollectionsSuccess, fetchCollectionsFailure} from "./shop.actions";

export const fetchCollections = () =>{
        return axios.get(`/collection/getAll`).then(
            res => {
                return res.data
            }).catch(
                err =>{
                    console.log("ERROR" + err)
                    throw err;
                }
        )
}

export function* fetchCollectionsAsync() {
    try {
        // const collectionRef = firestore.collection("collections");
        // const snapshot = yield collectionRef.get();

        // axios.get(`/collection/getAll`).then(
        //     res => {
        //         console.log(res)
        //         const collectionsMap = call(
        //             convertCollectionsSnapshotToMap,
        //             res.data
        //         );
        //         console.log(collectionsMap)
        //         put(fetchCollectionsSuccess(collectionsMap));
        //     }
        // )

        const snapshot = fetchCollections();


        // const collectionsMap = yield call(
        //     convertCollectionsSnapshotToMap,
        //     snapshot
        // );
        // yield put(fetchCollectionsSuccess(collectionsMap));
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
