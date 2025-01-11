import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhzcyElEfG-Z9y6L4VQSPopVdkOhPw2f0",
  authDomain: "utfsobrerodas.firebaseapp.com",
  projectId: "utfsobrerodas",
  storageBucket: "utfsobrerodas.firebasestorage.app",
  messagingSenderId: "200288887214",
  appId: "1:200288887214:web:357d5cc515316f8662a83f"
};

const app = initializeApp(firebaseConfig);
const auth_mod= getAuth(app);

export {app, auth_mod};