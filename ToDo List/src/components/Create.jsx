import { useState } from "react";
import axios from "axios";
import { Container, Input, ToDoBtn } from "../styles/Create";

export default function Create() {
  const [task, setTask] = useState();

  const handleAdd = () => {
    axios
      .post("https://todo-list-czku.onrender.com/add", { task: task })
      .then(() => location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Input
        onChange={(e) => setTask(e.target.value)}
        value={task}
        placeholder="What is the task today?"
      />

      <ToDoBtn onClick={handleAdd} disabled={task ? false : true}>
        Add Task
      </ToDoBtn>
    </Container>
  );
}
