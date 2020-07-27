import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAToGEfWTQaWKtYrMds12EPcT4ZAwzBFvM",
    authDomain: "crwn-web-58b32.firebaseapp.com",
    databaseURL: "https://crwn-web-58b32.firebaseio.com",
    projectId: "crwn-web-58b32",
    storageBucket: "crwn-web-58b32.appspot.com",
    messagingSenderId: "149502115254",
    appId: "1:149502115254:web:170c15686899ee03da9517",
    measurementId: "G-80DT4GF2KY"
};

export const creatUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;