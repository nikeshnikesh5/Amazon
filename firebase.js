import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCUpiZdj9Tjyg6BQ6WYPOfbpMZsnURsjQE",
    authDomain: "clone-bb5fd.firebaseapp.com",
    projectId: "clone-bb5fd",
    storageBucket: "clone-bb5fd.appspot.com",
    messagingSenderId: "557347207912",
    appId: "1:557347207912:web:c932f3e9e490437e36a75d",
    measurementId: "G-CCWW03JHSR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};


