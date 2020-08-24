import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCNkH1VBTjr3G3GCvCQzbFu3kcebLRB8JY',
  authDomain: 'e-comm-business-db.firebaseapp.com',
  databaseURL: 'https://e-comm-business-db.firebaseio.com',
  projectId: 'e-comm-business-db',
  storageBucket: 'e-comm-business-db.appspot.com',
  messagingSenderId: '797222369806',
  appId: '1:797222369806:web:e6f96ff9c262f9ed01da5f',
  measurementId: 'G-2Z6GWQH5Q1',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch(function (error) {
    const errorCode = error.code;

    console.log(errorCode);

    const errorMessage = error.message;

    console.log(errorMessage);
  });

export default firebase;
