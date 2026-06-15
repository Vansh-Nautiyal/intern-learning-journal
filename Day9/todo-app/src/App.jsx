import "./App.css";
import Header from "./components/Header.jsx";
import NewTask from "./components/NewTask.jsx";
import TaskList from "./components/TaskList.jsx";
import FilterTask from "./components/FilterTask.jsx";
import CompleteTask from "./components/CompleteTask.jsx";
import EditTask from "./components/EditTask.jsx";

import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task,
      ),
    );
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(filterValue.toLowerCase()),
  );

  return (
    <div className="mainContainer">
      <Header />
      <FilterTask value={filterValue} setValue={setFilterValue} />
      <NewTask addNewTask={addTask} />
      <TaskList className = "task-list"
        tasks={filteredTasks}
        completeTask={completeTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
