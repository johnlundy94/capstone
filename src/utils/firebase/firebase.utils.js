import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAz53N-Y9agc7kyaE_XrQnMYWSizz83pgk",
  authDomain: "capstone-db-38e9e.firebaseapp.com",
  projectId: "capstone-db-38e9e",
  storageBucket: "capstone-db-38e9e.appspot.com",
  messagingSenderId: "498403609054",
  appId: "1:498403609054:web:10db24598359bcc6f2b54f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
