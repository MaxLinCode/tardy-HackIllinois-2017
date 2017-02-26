import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDiL1XGJxQqqd8WCnwx6FQvzapSphklSmk",
  authDomain: "tardy-ccd34.firebaseapp.com",
  databaseURL: "https://tardy-ccd34.firebaseio.com",
  storageBucket: "tardy-ccd34.appspot.com",
  messagingSenderId: "959407744332"
};
firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
