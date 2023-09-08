import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDXq9TNk2vFzUKYx3rVeW8TLRC9RYU5v4Y",
  authDomain: "olx-clone-b9bde.firebaseapp.com",
  projectId: "olx-clone-b9bde",
  storageBucket: "olx-clone-b9bde.appspot.com",
  messagingSenderId: "679956665467",
  appId: "1:679956665467:web:4fbd2d294627506bfd7ede",
  measurementId: "G-5PZVH1ZP2L"
};

export default firebase.initializeApp(firebaseConfig)