import { ref, firebaseAuth } from './config/fireConstants'

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      console.log(error);
    })
}

export function logout () {
  console.log("User logged out.")
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw).then(() => console.log("User logged in"))
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    console.log(error);
  })
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}
