// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsLfvZ3I922i7nmVpbmIK12N_73H5IPXQ",
  authDomain: "dek-innovations.firebaseapp.com",
  projectId: "dek-innovations",
  storageBucket: "dek-innovations.appspot.com",
  messagingSenderId: "365104675315",
  appId: "1:365104675315:web:c5afa2ec3b3b4f427ffa86",
  measurementId: "G-RPHM1MPBF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);