
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Import Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyDPnn5pE3g80NbQihPn4IprmVtkmt963Xg",
  authDomain: "eco-mines.firebaseapp.com",
  databaseURL: "https://eco-mines-default-rtdb.firebaseio.com",
  projectId: "eco-mines",
  storageBucket: "eco-mines.appspot.com",
  messagingSenderId: "828677559081",
  appId: "1:828677559081:web:9a4eee5c12898147b91d38",
  measurementId: "G-N08HFBZB99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const db =getFirestore(app);

export { db };
