// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlKIe4vfV5XtutSIGtIHe1W9LTAUcxjqg",
  authDomain: "auth-integration-and-prvt-repo.firebaseapp.com",
  projectId: "auth-integration-and-prvt-repo",
  storageBucket: "auth-integration-and-prvt-repo.appspot.com",
  messagingSenderId: "139230950730",
  appId: "1:139230950730:web:6abc05087bd1dbd7e6bdb3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
