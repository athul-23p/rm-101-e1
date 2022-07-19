import React from "react";
import styles from "./task.module.css";
import Counter from '../Counter/Counter';
const Task = ({ task ,dispatch}) => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" checked={task.done} onChange={e => dispatch({type:'toggleTask',payload:task.id})} />
      <div data-testid="task-text">{task.text}</div>
      {/* Counter here */}
      <Counter count={task.count} />
      <button data-testid="task-remove-button">Remove</button>
    </li>
  );
};

export default Task;
