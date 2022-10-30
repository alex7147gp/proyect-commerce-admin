// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL3aPK5XwTx3ctGXSmaXJtxxFGvn_GUpk",
  authDomain: "myshop-6185a.firebaseapp.com",
  projectId: "myshop-6185a",
  storageBucket: "myshop-6185a.appspot.com",
  messagingSenderId: "812363664725",
  appId: "1:812363664725:web:e56d912ab246b4dd1e73dc",
  measurementId: "G-ECQRTE1FRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;