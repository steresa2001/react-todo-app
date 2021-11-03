import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Filter from "./components/Filter";
import Tasks from "./components/Tasks";

const PLACEHOLDER = "Enter task...";

function App() {
  const [inputText, setInputText] = useState("");
  const [task, setTask] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTask, setFilteredTask] = useState([]);

  const statusChange = () => {
    switch (status) {
      case "Complete":
        setFilteredTask(
          task.filter((item) => {
            return item.complete;
          })
        );
        break;
      case "All":
        setFilteredTask(task);
        break;
    }
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    statusChange();
    setLocalStorage();
  }, [task, status]);

  const setLocalStorage = () => {
    localStorage.setItem("task", JSON.stringify(task));
  };

  const getLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem("task"));
    console.log(tasks);
    if (tasks === null) return [];
    setTask(tasks);
  };
  return (
    <div className="container">
      <div className="action-container">
        <div className="input-container">
          <Input
            defaultText={PLACEHOLDER}
            inputText={inputText}
            setInputText={setInputText}
            task={task}
            setTask={setTask}
          />
        </div>
        <div className="filter-container">
          <Filter setStatus={setStatus} />
        </div>
      </div>
      <Tasks filteredTask={filteredTask} task={task} setTask={setTask} />
    </div>
  );
}

export default App;
