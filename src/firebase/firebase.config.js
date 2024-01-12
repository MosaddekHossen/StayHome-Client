
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYSmgWDl-H2l6OteGHeSy9ZM7F563yNoE",
  authDomain: "stayhome-afcc7.firebaseapp.com",
  projectId: "stayhome-afcc7",
  storageBucket: "stayhome-afcc7.appspot.com",
  messagingSenderId: "180786954880",
  appId: "1:180786954880:web:40e5f97049236807cf1c65"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);