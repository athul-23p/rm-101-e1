import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({dispatch}) => {
  // NOTE: do not delete `data-testid` key value pair
  const [text, setText] = useState("");

  const handleAddTask = () => {
    if (text === "") return;
    dispatch({ type: "addTask", payload: text });
  }
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" value={text} onChange={(e)=> setText(e.target.value)} />
      <button data-testid="add-task-button" onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTask;
