import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyB-tzeHfTgT9ZYZzKDa7LZYFT08w8T8-lk",
    authDomain: "my-project-1-7bc70.firebaseapp.com",
    projectId: "my-project-1-7bc70",
    storageBucket: "my-project-1-7bc70.appspot.com",
    messagingSenderId: "863331858530",
    appId: "1:863331858530:web:0a9b3c8a303f2ea288b93b",
    measurementId: "G-EDHK56XGH9"
})

export const db = app.firestore();