import * as firebase from "firebase/app";
import "firebase/firestore";


const getDocuments = (collection: string, filter: { fieldPath: string, opStr: firebase.firestore.WhereFilterOp, value: any } | undefined = undefined): Promise<firebase.firestore.DocumentData[]> => new Promise((resolve, reject) => {
  let ref: firebase.firestore.Query<firebase.firestore.DocumentData> | firebase.firestore.CollectionReference<firebase.firestore.DocumentData> = firebase.firestore().collection(collection);
  if (filter !== undefined) ref = ref.where(filter.fieldPath, filter.opStr, filter.value);
  
  ref.get()
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
