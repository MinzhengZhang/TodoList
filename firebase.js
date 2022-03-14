import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbpnjqVHOYUOZG5b7f0K3wNqOQdd8_OWs",
  authDomain: "todoapp-ff197.firebaseapp.com",
  projectId: "todoapp-ff197",
  storageBucket: "todoapp-ff197.appspot.com",
  messagingSenderId: "433751723845",
  appId: "1:433751723845:web:adf3ffba6a1227b990f82c",
  measurementId: "G-CRT4CQV3TG"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db }