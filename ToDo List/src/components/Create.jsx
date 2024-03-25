import { useState } from "react";
import axios from "axios";

export default function Create() {
  const [task, setTask] = useState();

  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then(() => location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input
        onChange={(e) => setTask(e.target.value)}
        label="type your task"
        value={task}
      />
      <button onClick={handleAdd} disabled={task ? false : true}>
        Add Task
      </button>
    </div>
  );
}
