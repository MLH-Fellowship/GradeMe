import * as firebase from "firebase/app";
import "firebase/auth";


const signInWithGoogle = (): Promise<firebase.User> => new Promise((resolve, reject) => {
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
  signInWithGoogle,
};