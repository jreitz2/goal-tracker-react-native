import { createContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const GoalsContext = createContext();

export function GoalsProvider({ children }) {
  const [goals, setGoals] = useState([]);

  async function fetchGoals() {}
  async function createGoal(goalData) {
    await addDoc(collection(db, "goals"), goalData);
  }
  async function updateGoal() {}
  async function deleteGoal() {}

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
