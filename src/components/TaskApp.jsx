import React, { useReducer } from "react";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import AddTask from './AddTask/AddTask';
import Tasks from './Tasks/Tasks';
import data from '../data/tasks.json';

const initState = {
  data: data,
}
function reducer(state, { type, payload }) {
  switch (type) {
    case 'addTask':
      console.log('add task in progress');
      const t = state.data.filter(task => task.text === payload);
      const len = state.data.length+1;
      if (t.length === 0) {
        return { ...state, data: [...state.data, {count:1,text:payload,id:len,done:false}] };
      }
      return state;
    case 'toggleTask':
      const data = state.data.map(task => task.id === payload ? { ...task, done: !task.done } : task)
      return { ...state, data: data };
    case 'incrementCounter':
    case 'decrementCounter':
    case 'removeTask':
    default:
      return state;
  }
}

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair

  const [tasks, dispatch] = useReducer(reducer,initState);
  // console.log(tasks);
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader tasks={tasks} />
      {/* Add Task */}
      <AddTask dispatch={dispatch}/>
      {/* Tasks */}
      <Tasks data={tasks.data} dispatch={dispatch} />
    </div>
  );
};

export default TaskApp;
