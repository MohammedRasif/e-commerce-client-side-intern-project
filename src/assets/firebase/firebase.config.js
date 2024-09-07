// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7SJbBhExCggikU5xt3c2uDOFazn56SVc",
  authDomain: "e-commerce-3815f.firebaseapp.com",
  projectId: "e-commerce-3815f",
  storageBucket: "e-commerce-3815f.appspot.com",
  messagingSenderId: "436060583803",
  appId: "1:436060583803:web:c27559a219eba876292fde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth