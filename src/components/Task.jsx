import React from "react";

const Task = ({ task, onMove }) => {
  const handleMove = () => {
    onMove(task);
  };
  return (
    <div className="taskbackground">
      <ul className="list-group" key={task.id}>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {task.tasks.length > 20
            ? task.tasks.substring(0, 20) + "..."
            : task.tasks}
          <div className="buttoncontainer">
            {task.status !== "completed" && (
              <button onClick={handleMove} className={`btn ${task.status === "pending" ? "btn-info" :"btn-success"}`}>
                {task.status === "pending" ? "Progress" : "Completed"}
              </button>
            )}
            {task.status === "completed" ? task.time : ""}
            
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Task;
