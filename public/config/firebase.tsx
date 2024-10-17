import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvz9htuQV3_34J18f8ulA7HIlPj3ZWR8I",
  authDomain: "car-rent-d1c84.firebaseapp.com",
  projectId: "car-rent-d1c84",
  storageBucket: "car-rent-d1c84.appspot.com",
  messagingSenderId: "633029863636",
  appId: "1:633029863636:web:a70cc3d713b7ce2800f341",
  measurementId: "G-06M5XJFK54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
