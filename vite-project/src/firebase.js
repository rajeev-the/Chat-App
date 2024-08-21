// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1d02nkhsHYBTzkq6zSCyp5OZBRpzZuNA",
  authDomain: "chating-app-a16da.firebaseapp.com",
  projectId: "chating-app-a16da",
  storageBucket: "chating-app-a16da.appspot.com",
  messagingSenderId: "153159939712",
  appId: "1:153159939712:web:fc9b98f29a2566375f9865"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore(app);
