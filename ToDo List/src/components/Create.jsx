import { useState } from "react";
import axios from "axios";
import { TextField, Button, makeStyles, Container } from "@material-ui/core";

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
    marginTop: 10,
  },
});

export default function Create() {
  const [task, setTask] = useState();
  const classes = useStyles();

  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then(() => location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <Container className={classes.container}>
      <TextField
        variant="outlined"
        onChange={(e) => setTask(e.target.value)}
        label="type your task"
        value={task}
        className={classes.input}
      />
      <Button
        size="large"
        variant={"contained"}
        color="primary"
        onClick={handleAdd}
        className={classes.addButton}
        disabled={task ? false : true}
      >
        Add Task
      </Button>
    </Container>
  );
}
