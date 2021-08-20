import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDnyCoBU7k6Rv-27VWdrhR0OH0IE3I3CuQ",
    authDomain: "disney-clone-fb702.firebaseapp.com",
    projectId: "disney-clone-fb702",
    storageBucket: "disney-clone-fb702.appspot.com",
    messagingSenderId: "147530828814",
    appId: "1:147530828814:web:b48f6dc55ba1d2ce65005f"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage }
  export default db