import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXvkNW0rADJ1WDxYxqPYkrvSHS_JiuM-c",
    authDomain: "slackclone-6bdc4.firebaseapp.com",
    databaseURL: "https://slackclone-6bdc4.firebaseio.com",
    projectId: "slackclone-6bdc4",
    storageBucket: "slackclone-6bdc4.appspot.com",
    messagingSenderId: "662603262534",
    appId: "1:662603262534:web:2b46e9d8388ad65b633847",
    measurementId: "G-GBHNRMRQHN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider };
  export default db;