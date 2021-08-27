import firebase from "firebase";

 const firebaseConfig = {
    apiKey: "AIzaSyBdCDdco5haDJ7VQqrGvpDfWPBPdkoo9Hw",
    authDomain: "chat-2eb4a.firebaseapp.com",
    databaseURL: "https://chat-2eb4a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-2eb4a",
    storageBucket: "chat-2eb4a.appspot.com",
    messagingSenderId: "496414395050",
    appId: "1:496414395050:web:10c1d8ffda12a1edfcded3",
    measurementId: "G-HT23TFJBMK"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig)

  export const db = firebaseApp.database()