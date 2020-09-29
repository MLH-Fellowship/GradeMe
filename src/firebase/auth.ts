import * as firebase from "firebase/app";
import "firebase/auth";


const isUserSignedIn = () => {
  return firebase.auth().currentUser !== null;
};

const signInWithGoogle = (shouldRedirect: boolean = true): Promise<firebase.User> => new Promise((resolve, reject) => {
  firebase.auth().getRedirectResult()
    .then(({ user }) => {
      if (user) return resolve(user);
      if (!shouldRedirect) return;
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    })
    .catch(error => {
      console.error(error.code, error.message);
      reject(error);
    });
});


export {
  isUserSignedIn,
  signInWithGoogle,
};
