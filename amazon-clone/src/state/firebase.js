import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBeqMEjNon6gbSZv9d-8JfGJsx501SFBM4",
    authDomain: "clone-7b2b4.firebaseapp.com",
    databaseURL: "https://clone-7b2b4.firebaseio.com",
    projectId: "clone-7b2b4",
    storageBucket: "clone-7b2b4.appspot.com",
    messagingSenderId: "923668363202",
    appId: "1:923668363202:web:344d9c35c7d0b4acb2485b"
});

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };

