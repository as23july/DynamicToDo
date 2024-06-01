"use client";
import { useState } from "react";
import "./App.css";
import Headding from "./components/headding/Headding";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState("");
  const [desc, setDesc] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tasks) return alert("Please Enter Task");
    const newtask = {
      tasks,
      desc,
      id: new Date().getTime(),
      status: "pending",
      time: new Date().toLocaleString(),
    };

    setTaskList([...taskList, newtask]);
    console.log(taskList.length);
    setTasks("");
    setDesc("");
  };

  const moveTask = (movedTask) => {
    const updatedTask = taskList.map((task) => {
      if (task.id === movedTask.id) {
        if (task.status === "pending") {
          return { ...task, status: "progress" };
        } else if (task.status === "progress") {
          return { ...task, status: "completed" };
        }
      }
      return task;
    });
    setTaskList(updatedTask);
  };

  const pendingTask = taskList.filter((task) => task.status === "pending");
  const progressTask = taskList.filter((task) => task.status === "progress");
  const completedTask = taskList.filter((task) => task.status === "completed");

  return (
    <>
      <Headding />

      <div className="container maincontainer">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className=" form-control addtask"
                placeholder="Enter Task"
                value={tasks}
                onChange={(e) => setTasks(e.target.value)}
              />
              <input
                type="text"
                className="form-control addtask"
                placeholder="Enter Discription"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
              <button className="btn btn-primary add-button" type="submit">
                Add Task
              </button>
            </div>
          </form>
          <div className="container text-center">
            <div className="row">
              {/* <ActiveTask taskList={taskList} />

              <Inprogress />
              <Completed /> */}
              <TaskList taskList={pendingTask} title="Task" onMove={moveTask} />
              <TaskList
                taskList={progressTask}
                title="In Progress"
                onMove={moveTask}
              />
              <TaskList
                taskList={completedTask}
                title="Completed"
                onMove={moveTask}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
