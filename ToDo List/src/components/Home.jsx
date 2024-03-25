import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
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
      .put("http://localhost:3001/update/" + id, {
        done: !todos.find((todo) => todo._id === id).done,
      })
      .then(() => {
        setTodos(updatedTodos);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then(() => location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Todo List</h3>
      <Create />
      <div>
        {todos.map((todo) => (
          <div key={todo._id}>
            <input
              onClick={() => handleUpdate(todo._id, !todo.done)}
              checked={todo.done}
            />
            <p style={{ color: todo.done ? "green" : "black" }}>{todo.task}</p>
            <button onClick={() => handleDelete(todo._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
