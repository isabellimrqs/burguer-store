import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfNQ2o6EwjyLPvXvWcVNovfybGSIimOEg",
  authDomain: "marquesaesthetic-5f9f0.firebaseapp.com",
  projectId: "marquesaesthetic-5f9f0",
  storageBucket: "marquesaesthetic-5f9f0.appspot.com",
  messagingSenderId: "823407253964",
  appId: "1:823407253964:web:cf852a1a15c1850efea569"
};

const app = initializeApp(firebaseConfig);

export default app