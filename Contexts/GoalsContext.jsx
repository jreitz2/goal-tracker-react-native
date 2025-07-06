import { createContext, useEffect, useState } from "react";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const GoalsContext = createContext();

export function GoalsProvider({ children }) {
  const [goals, setGoals] = useState([]);

  async function fetchGoals() {
    const snapshot = await getDocs(collection(db, "goals"));

    const documents = snapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    setGoals(documents);
  }
  async function createGoal(goalData) {
    await addDoc(collection(db, "goals"), goalData);
  }
  async function updateGoal() {}
  async function deleteGoal() {}

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "goals"), (snapshot) => {
      const documents = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setGoals(documents);
    });

    return () => unsub();
  }, []);

  return (
    <GoalsContext.Provider
      value={{
        goals,
        setGoals,
        fetchGoals,
        createGoal,
        updateGoal,
        deleteGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
}
