import * as firebase from "firebase/app";
import "firebase/auth";


const initialize = () => {
  firebase.initializeApp({
    apiKey: "AIza....",
    appId: "1:27992087142:web:ce....",
    projectId: "my-firebase-project",
    authDomain: "YOUR_APP.firebaseapp.com",
    databaseURL: "https://YOUR_APP.firebaseio.com",
    storageBucket: "YOUR_APP.appspot.com",
    messagingSenderId: "123456789",
    measurementId: "G-12345",
  });
}

const signInWithGoogle = () => new Promise((resolve, reject) => {
  firebase.auth().getRedirectResult()
    .then(({ user }) => {
      if (user) return resolve(user);
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    })
    .catch(error => {
      console.error(error.code, error.message);
      reject(error);
    });
});


export {
  initialize,
  signInWithGoogle
};
