import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWfEEuz4sN9duiQE_5UKFQS-_t88Wotts",
  authDomain: "slack-90c8f.firebaseapp.com",
  databaseURL: "https://slack-90c8f.firebaseio.com",
  projectId: "slack-90c8f",
  storageBucket: "slack-90c8f.appspot.com",
  messagingSenderId: "372559944918",
  appId: "1:372559944918:web:4b57351677f65a530a7d77",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
