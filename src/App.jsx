import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import CreatorTask from "./components/CreatorTask";
import ListTask from "./components/ListTask";
import CompleteTask from "./components/CompleteTask";

const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log("tasks", tasks);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <>
      <Toaster />
      <div className="items-center text-center flex flex-col bg-dodgerblue">
        <CreatorTask tasks={tasks} setTasks={setTasks} />
        <ListTask tasks={tasks} setTasks={setTasks} />
        <CompleteTask task={tasks} setTasks={setTasks} />
      </div>
    </>
  );
};

export default App;
