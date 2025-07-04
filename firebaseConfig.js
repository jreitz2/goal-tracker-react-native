import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkPrRb2Rl2Ngobs4FYntW7KciMB8W5xKw",
  authDomain: "goal-tracker-fbd1c.firebaseapp.com",
  projectId: "goal-tracker-fbd1c",
  storageBucket: "goal-tracker-fbd1c.firebasestorage.app",
  messagingSenderId: "535580854490",
  appId: "1:535580854490:web:39946c4e96af25b4623de3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
