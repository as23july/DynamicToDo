import React from "react";
import Task from "./Task";

const TaskList = ({ taskList, title, onMove }) => {
    const style = {
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "5px",
        minHeight: "80vh",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        margin: "5px",
    };
  
  return (
    <div className="col" style={style}>
      <h3>{title}</h3>
      {taskList.map((task, id ) => (
        <Task key={id} task={task} onMove={onMove} />
      ))}
    </div>
  );
};

export default TaskList;
