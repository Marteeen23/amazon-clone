// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA8EcYViyUT4DrBbwGEsA939LKtXNsDyLY",
    authDomain: "react-clone-26277.firebaseapp.com",
    projectId: "react-clone-26277",
    storageBucket: "react-clone-26277.appspot.com",
    messagingSenderId: "719880184182",
    appId: "1:719880184182:web:c5e10b42e79ef337981a57",
    measurementId: "G-N9DGYLX4E8"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { db, auth };