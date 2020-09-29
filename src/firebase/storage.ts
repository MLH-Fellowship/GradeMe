import * as firebase from "firebase/app";
import "firebase/firestore";


const getDocuments = (collection: string): Promise<firebase.firestore.DocumentData[]> => new Promise((resolve, reject) => {
  firebase.firestore().collection(collection).get()
    .then(snapshot => resolve(snapshot.docs.map(doc => doc.data())))
    .catch(error => {
      console.error(error.code, error.message);
      reject(error);
    });
});

const storeDocument = (collection: string, document: firebase.firestore.DocumentData): Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>> => new Promise((resolve, reject) => {
  firebase.firestore().collection(collection).add(document)
    .then(ref => resolve(ref))
    .catch(error => {
      console.error(error.code, error.message);
      reject(error);
    });
});


export {
  getDocuments,
  storeDocument,
};
