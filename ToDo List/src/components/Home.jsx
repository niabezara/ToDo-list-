import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://todo-list-czku.onrender.com/get`)
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (id) => {
    axios
      .put("https://todo-list-czku.onrender.com/update/" + id)
      .then(() => location.reload())
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios
      .delete("https://todo-list-czku.onrender.com/delete/" + id)
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
              type="checkbox"
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
