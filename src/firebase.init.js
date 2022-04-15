import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCCyzd2B7mY3OWUWP0cnBokfmBboiRDl4g",
  authDomain: "car-care-ae806.firebaseapp.com",
  projectId: "car-care-ae806",
  storageBucket: "car-care-ae806.appspot.com",
  messagingSenderId: "438892564320",
  appId: "1:438892564320:web:b976b2876a88a76c1f9805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;