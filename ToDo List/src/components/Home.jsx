import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { Container, Wrap, Checkbox } from "../styles/Home";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://todo-list-czku.onrender.com/get`)
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo._id === id) {
        // Toggle the 'done' field
        return { ...todo, done: !todo.done };
      }
      return todo;
    });

    axios
      .put("https://todo-list-czku.onrender.com/update/" + id, {
        done: !todos.find((todo) => todo._id === id).done,
      })
      .then(() => {
        setTodos(updatedTodos);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("https://todo-list-czku.onrender.com/delete/" + id)
      .then(() => location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <h1>Todo List</h1>
      <Create />

      {todos.map((todo) => (
        <Wrap key={todo._id}>
          <Checkbox
            className={todo.done ? "checboxdoneIcon" : "checkbox"}
            checked={todo.done}
            onClick={() => handleUpdate(todo._id)}
          ></Checkbox>
          <p className={todo.done ? "strikethrough" : ""}>{todo.task}</p>
          <img
            src="/trash.png"
            icon="fa-trash"
            style={{ width: "30px", height: "30px" }}
            onClick={() => handleDelete(todo._id)}
          />
        </Wrap>
      ))}
    </Container>
  );
}
