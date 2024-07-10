// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv_3s4uO2pothmCKl4P_iKU6-pC34Arkk",
  authDomain: "my-project-site-708cd.firebaseapp.com",
  projectId: "my-project-site-708cd",
  storageBucket: "my-project-site-708cd.appspot.com",
  messagingSenderId: "169790722496",
  appId: "1:169790722496:web:9a2dd5efbdf5e6b3fdb825",
  measurementId: "G-EYNLJ1NP4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);