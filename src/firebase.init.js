// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW7dQ4vgUW5Oh5Q2GFQIkV9-d_L9hau5o",
  authDomain: "warehouse-management-web-d5f96.firebaseapp.com",
  projectId: "warehouse-management-web-d5f96",
  storageBucket: "warehouse-management-web-d5f96.appspot.com",
  messagingSenderId: "782102830708",
  appId: "1:782102830708:web:cff68ad9d375add9a63b21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;