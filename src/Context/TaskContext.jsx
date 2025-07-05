import { createContext, useState } from "react";

export const TaskContext = createContext();

function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const editTasks = (index, updatedTask) => {
    setTasks((pre) => {
      const existsTask = [...pre];
      existsTask[index] = updatedTask;
      return existsTask;
    });
  };

  const addTimeToTask = (index, timeData) => {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index] = { ...newTasks[index], ...timeData };
      return newTasks;
    });
  };
  return (
    <TaskContext.Provider value={{ tasks, addTask, editTasks, addTimeToTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContextProvider };
