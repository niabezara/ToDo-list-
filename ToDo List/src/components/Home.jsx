import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";

export default function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then(() => location.reload())
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
      <h1>Todo List</h1>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>no records</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div key={todo._id} onClick={() => handleUpdate(todo._id)}>
            <h2>{todo.task}</h2>
            {todo.done ? (
              <span className="checkboxdone" />
            ) : (
              <span className="checkbox" />
            )}
            <span onClick={() => handleDelete(todo._id)}>del</span>
          </div>
        ))
      )}
    </div>
  );
}
