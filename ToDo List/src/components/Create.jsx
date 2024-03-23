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
        type="text"
        name=""
        id=""
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        add
      </button>
    </div>
  );
}
