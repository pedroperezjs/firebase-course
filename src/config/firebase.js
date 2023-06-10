import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtFx-0Y-mr8lLXF1nORQFJkNp45i-1vwg",
  authDomain: "fir-course-fc9ea.firebaseapp.com",
  projectId: "fir-course-fc9ea",
  storageBucket: "fir-course-fc9ea.appspot.com",
  messagingSenderId: "952014244525",
  appId: "1:952014244525:web:a2bd2af9724544bffcd424",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
