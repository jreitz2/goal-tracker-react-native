import { useContext } from "react";
import { GoalsContext } from "../Contexts/GoalsContext";

export const useGoals = () => {
  const context = useContext(GoalsContext);
  if (!context) {
    throw new Error("useGoals must be used within a GoalsProvider");
  }
  return context;
};
