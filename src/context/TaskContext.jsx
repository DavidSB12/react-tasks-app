import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/tasks.js";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [taskState, setTaskState] = useState([]);

  useEffect(() => {
    setTaskState(data);
  }, []);

  function createTask(t) {
    setTaskState([
      ...taskState,
      { id: taskState.length, title: t.title, description: t.description },
    ]);
  }

  function deleteTask(id) {
    console.log(id);
    setTaskState(taskState.filter((task) => task.id != id));
  }
  return (
    <TaskContext.Provider
      value={{
        tasks: taskState,
        deleteTask: deleteTask,
        createTask: createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
