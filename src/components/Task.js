import React from "react";
import "../App.css";

const Task = ({ title, description, deleteTask, index }) => {
  return (
    <div className="task">
      <div className="task-details">
        <p className="tit">{title}</p>
        <p>{description}</p>
      </div>
      <button onClick={() => deleteTask(index)}>-</button>
    </div>
  );
};

export default Task;
