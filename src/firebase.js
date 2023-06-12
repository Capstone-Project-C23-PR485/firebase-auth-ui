import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Testing config
// const firebaseConfig = {
//   apiKey: "AIzaSyBuqo-mUCcWB-xATAYeq_PApa23IjWzyVg",
//   authDomain: "testing-auth-with-node.firebaseapp.com",
//   projectId: "testing-auth-with-node",
//   storageBucket: "testing-auth-with-node.appspot.com",
//   messagingSenderId: "343964390409",
//   appId: "1:343964390409:web:8a907bc6c11be9671354d8",
// };

// Production config
const firebaseConfig = {
  apiKey: "AIzaSyDT7mFXoGm9EFl4GZyEpQIQ1P72x-Jc08M",
  authDomain: "capstone-skincheckai.firebaseapp.com",
  projectId: "capstone-skincheckai",
  storageBucket: "capstone-skincheckai.appspot.com",
  messagingSenderId: "256420525441",
  appId: "1:256420525441:web:46121a373d7a25b9f7a480",
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
