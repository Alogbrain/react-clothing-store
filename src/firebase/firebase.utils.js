import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUd3OxW7TCHz04NKZV-i5L8v4mjHBmMYE",
    authDomain: "shop-clothes-cdf8c.firebaseapp.com",
    databaseURL: "https://shop-clothes-cdf8c.firebaseio.com",
    projectId: "shop-clothes-cdf8c",
    storageBucket: "shop-clothes-cdf8c.appspot.com",
    messagingSenderId: "506917726169",
    appId: "1:506917726169:web:1871461fecae811c319bc8",
    measurementId: "G-8XVLBJ9QNL"
};
firebase.initializeApp(firebaseConfig);
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (e) {
            console.log("Error creating user", e.message);
        }
    }

    return userRef;
};

export const convertCollectionsSnapshotToMap = collections => {
    // const transformedCollection = collections.docs.map(doc => {
    //     const { title, items } = doc.data();
    //
    //     return {
    //         routeName: encodeURI(title.toLowerCase()),
    //         id: doc.id,
    //         title,
    //         items,
    //     };
    // });
    const transformedCollection = collections.map(doc => {
        const { title, items } = doc;

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
