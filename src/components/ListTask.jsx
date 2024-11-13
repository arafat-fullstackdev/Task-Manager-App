import { Stack } from "react-bootstrap";
import { useState } from "react";

const ListTask = ({ tasks, setTasks }) => {
    const [todos,setTodos] = useState([]);
    const [inProgress,setInProgress] = useState([]);
    const [closed,setClosed] = useState([]);
  return (
    <div>
      List
    </div>
  );
};

export default ListTask;
