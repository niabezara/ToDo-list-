import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import {
  Container,
  List,
  ListItem,
  Checkbox,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    width: "70%",
    marginBottom: 30,
  },
  addButton: {
    height: 55,
    marginBottom: 30,
  },
  container: {
    textAlign: "center",
    marginTop: 100,
  },
  list: {
    width: "80%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
    border: "1px solid light-gray",
  },
  text: {
    width: "70%",
  },
  listButtons: {
    marginLeft: 10,
  },
  title: {
    textAlign: "center",
    width: "100%",
    color: "#f50057",
  },
});

export default function Home() {
  const [todos, setTodos] = useState([]);
  const classes = useStyles();
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
    <Container component="main">
      <Typography variant="h3" className={classes.title}>
        Todo List
      </Typography>

      <Create />

      <List>
        {todos.map((todo) => (
          <ListItem divider={true} className={classes.list} key={todo._id}>
            <Checkbox
              onClick={() => handleUpdate(todo._id, !todo.done)}
              checked={todo.done}
            />
            <Typography
              className={classes.text}
              style={{ color: todo.done ? "green" : "" }}
            >
              {todo.task}
            </Typography>
            <Button
              onClick={() => handleDelete(todo._id)}
              color="secondary"
              variant="contained"
              className={classes.listButtons}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
