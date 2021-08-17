import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDfg9xk_P70n92fTOqC6XeC9d8v1CniL4k",
  authDomain: "what-s-app-clone-f7db1.firebaseapp.com",
  projectId: "what-s-app-clone-f7db1",
  storageBucket: "what-s-app-clone-f7db1.appspot.com",
  messagingSenderId: "797327592331",
  appId: "1:797327592331:web:3545beef4a31dbda2cbd8e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
