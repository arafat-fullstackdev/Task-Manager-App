import { Stack } from "react-bootstrap";
import { useEffect, useState } from "react";

const ListTask = ({ tasks, setTasks }) => {
    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [closed, setClosed] = useState([]);

    useEffect(() =>{
      const fTodos = tasks.filter(task => task.status === "todos");
      const fProgress = tasks.filter(task => task.status === "progress");
      const fClosed = tasks.filter(task => task.status === "closed");

      setTodos(fTodos);
      setInProgress(fProgress);
      setClosed(fClosed);
    },[tasks]);

    const statuses = ["todos", "inprogress", "closed"];

   

  return (
    <div>
      List
    </div>
  );
};

export default ListTask;
