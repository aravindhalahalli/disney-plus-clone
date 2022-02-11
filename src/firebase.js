import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDiEpMgTTBjOhbrE7dzSmQTcR2oHtITKFc",
  authDomain: "disney-plus-clone-4a329.firebaseapp.com",
  projectId: "disney-plus-clone-4a329",
  storageBucket: "disney-plus-clone-4a329.appspot.com",
  messagingSenderId: "62426848849",
  appId: "1:62426848849:web:233bf8950b7b2510236270",
  measurementId: "G-JYL83PWX70",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
