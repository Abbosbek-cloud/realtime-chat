import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBozIbXueXIE_d2S96Ed_0GtVzLYKQewNA",
  authDomain: "chat-app-e6a82.firebaseapp.com",
  projectId: "chat-app-e6a82",
  storageBucket: "chat-app-e6a82.appspot.com",
  messagingSenderId: "1066017346271",
  appId: "1:1066017346271:web:ed219092c2dfede1a40f6a",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
