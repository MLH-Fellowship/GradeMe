import * as firebase from "firebase/app";


const isInitialized = () => {
  return firebase.apps.length > 0;
};

const initialize = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyAHEDybBBGR97FXlPFNMMVId_2tiyby9Ps",
    authDomain: "gr-calc.firebaseapp.com",
    databaseURL: "https://gr-calc.firebaseio.com",
    projectId: "gr-calc",
    storageBucket: "gr-calc.appspot.com",
    messagingSenderId: "792549088089",
    appId: "1:792549088089:web:dc97154c17c6da87190a48"
  });
}


export {
  isInitialized,
  initialize,
};
