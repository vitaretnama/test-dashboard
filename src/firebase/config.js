import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfenqdxQ7QeKpirYHrVfZTs4O0HzmZWKs",
  authDomain: "rimba-test.firebaseapp.com",
  projectId: "rimba-test",
  storageBucket: "rimba-test.appspot.com",
  messagingSenderId: "139902506241",
  appId: "1:139902506241:web:cfa9933e4e79b61a1b7700",
};

initializeApp(firebaseConfig)
const firebaseAuth = getAuth()

export {firebaseAuth}