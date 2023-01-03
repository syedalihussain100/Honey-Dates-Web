import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import firebaseConfig from "./firebaseservice";


firebase.initializeApp(firebaseConfig);



let auth = firebase.auth();



export {auth}