// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZI6981aD-ox-VeCRj4Pq2IwSzUib1hw8",
  authDomain: "space-flight-aafd6.firebaseapp.com",
  projectId: "space-flight-aafd6",
  storageBucket: "space-flight-aafd6.appspot.com",
  messagingSenderId: "661173679099",
  appId: "1:661173679099:web:1169b5b1a0175ff1da115e",
  databaseURL:
    "https://space-flight-aafd6-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const reference = ref(db, "scores/");

function writeUserData(username, score) {
  set(reference, {
    username: username,
    score: score,
  });
}

function pushUserData(username, score) {
  push(reference, {
    username: username,
    score: score,
  });
}

pushUserData("Carl", 2800);
pushUserData("Carl", 2000);
pushUserData("Carl", 1800);
pushUserData("Carl", 1500);
pushUserData("Carl", 1100);
