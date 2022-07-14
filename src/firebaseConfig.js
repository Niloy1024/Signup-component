// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCAWVNvH4kyh084pyzdN_wNRuUnUlBdNhg",
  authDomain: "fir-7333c.firebaseapp.com",
  projectId: "fir-7333c",
  storageBucket: "fir-7333c.appspot.com",
  messagingSenderId: "959232397936",
  appId: "1:959232397936:web:90b2ea7c1649dadbbc9ab5",
  measurementId: "G-HN429KZJVK"
};
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);