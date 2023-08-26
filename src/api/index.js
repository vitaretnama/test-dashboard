import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../firebase/config";

export const getUser = () => {
  try {
    return firebaseAuth.currentUser;
  } catch (error) {
    throw error;
  }
};

export const getUserObservable = () => {
  try {
    firebaseAuth.onAuthStateChanged((user) => {
      return user;
    });
  } catch (error) {
    throw error;
  }
};

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      firebaseAuth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
}

export const signIn = (email, password) =>
  signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      throw error.code;
    });

export const logOut = () =>
  signOut(firebaseAuth)
    .then(() => {
      console.log("user sign out");
    })
    .catch((error) => {
      throw error;
    });
