// just going to render our tasks
import { useState } from "react";

const InlineEdit = ({ task, editTask, index }) => {
  const [show, setShow] = useState(false);
  let [newTask, setNewTask] = useState({ key: task.key, text: task.text });

  const onChange = (e) => {
    newTask = setNewTask({ key: e.target.value, text: e.target.value });
  };
  const onClick = () => {
    setShow(!show);
    if (show) {
      editTask(newTask, index);
    }
  };

  if (!show) {
    return <button onClick={onClick}>Edit</button>;
  }
  return (
    <>
      <input type="text" value={newTask.text} onChange={onChange} />
      <button onClick={onClick}>Re-Submit</button>
    </>
  );
};

export default function Overview(props) {
  const { tasks, removeTasks, editTask, setTask } = props;
  return (
    <div>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <b>{index + 1} </b>
              {task.text}
              <button onClick={() => removeTasks(index)}>Delete</button>
              <InlineEdit
                task={task}
                editTask={editTask}
                index={index}
                setTask={setTask}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
