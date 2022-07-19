import React from "react";
import styles from "./tasks.module.css";
import Task from '../Task/Task';
const Tasks = ({data,dispatch}) => {
  // NOTE: do not delete `data-testid` key value pair

  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {data?.map(task => <Task task={task} key={task.id} dispatch={dispatch} />)}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
