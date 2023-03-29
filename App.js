// handle input field with logic
import Overview from "./components/Overview";
import { useState } from "react";

function App() {
  // const [tasks, setTasks] = useState([]);
  let [task, setTask] = useState({ key: "", text: "" });
  // const [tasks, setArray] = useState([]);
  const [tasks, setTasks] = useState([]);

  function handleInput(e) {
    task = setTask({ key: e.target.value, text: e.target.value });
  }

  function addTask() {
    setTasks((previous) => [...previous, task]);
    setTask({ key: "", text: "" });
  }

  function removeTask(index) {
    setTasks((prevState) => {
      const tasks = [...prevState];
      tasks.splice(index, 1);
      return tasks;
    });
  }

  function editTask(task, index) {
    setTasks((prevState) => {
      const tasks = [...prevState];
      tasks[index].key = task.key;
      tasks[index].text = task.text;
      return tasks;
    });
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Task: </label>
        <input value={task.text} onChange={handleInput} />
        <button onClick={addTask}>Add Task</button>
      </form>
      <Overview
        tasks={tasks}
        removeTasks={removeTask}
        editTask={editTask}
        setTask={setTask}
      ></Overview>
    </>
  );
}

export default App;
