import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuqo-mUCcWB-xATAYeq_PApa23IjWzyVg",
  authDomain: "testing-auth-with-node.firebaseapp.com",
  projectId: "testing-auth-with-node",
  storageBucket: "testing-auth-with-node.appspot.com",
  messagingSenderId: "343964390409",
  appId: "1:343964390409:web:8a907bc6c11be9671354d8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    console.log(res);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, signInWithGoogle, logout };
