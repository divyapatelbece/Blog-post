import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDD5cccQKS-d35LnjniM7PdTJWh5D-R_A",
  authDomain: "blog-post-f1be2.firebaseapp.com",
  projectId: "blog-post-f1be2",
  storageBucket: "blog-post-f1be2.appspot.com",
  messagingSenderId: "981611747651",
  appId: "1:981611747651:web:309ec95e444ab6b3ec37f6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
