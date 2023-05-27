// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmeJ_dBAoWSln8HrIcxzcJdZWCxcTCw7E",
  authDomain: "bistro-restaurent.firebaseapp.com",
  projectId: "bistro-restaurent",
  storageBucket: "bistro-restaurent.appspot.com",
  messagingSenderId: "171111628693",
  appId: "1:171111628693:web:4d03b55ef6c56a40f4409c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;