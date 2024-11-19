import React,{createContext, useState} from 'react';

export const TaskContext = createContext();

export const TaskProvider=({ children}) => {
    const [tasks, setTasks] = useState({
        todo: [],
        doing:[],
        completed: [],
    });
  return (
    <div>Context</div>
  )
}

export default TaskProvider;