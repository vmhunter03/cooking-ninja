import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDcDOR37VrLc72wrayOZ1c7OWThwsT8f1c",
    authDomain: "cooking-ninja-site-d486a.firebaseapp.com",
    projectId: "cooking-ninja-site-d486a",
    storageBucket: "cooking-ninja-site-d486a.appspot.com",
    messagingSenderId: "156223817974",
    appId: "1:156223817974:web:273ab8b7b2ae33f61984d7"
  };

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
