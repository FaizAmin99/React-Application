// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsb6WVyC4om4G8KYGNNIBSBe97A_M7W14",
  authDomain: "dymax-react.firebaseapp.com",
  projectId: "dymax-react",
  storageBucket: "dymax-react.appspot.com",
  messagingSenderId: "1001720552755",
  appId: "1:1001720552755:web:1ffc2b2118f0ae58da3246",
  measurementId: "G-8DQVC0J8YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };