import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB3KO-6Qy_PX9NAVKwFtSDOcZSWtciFsM",
  authDomain: "db-68144.firebaseapp.com",
  projectId: "db-68144",
  storageBucket: "db-68144.appspot.com",
  messagingSenderId: "34917200910",
  appId: "1:34917200910:web:4e39300e3c630cafc3f85f",
  measurementId: "G-JZXZTMV0KQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
