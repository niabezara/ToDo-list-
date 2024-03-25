const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const express = require('express');
const cors = require('cors');
const TodoModel = require('./models/Todo');

const app = express();

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log('db connection success'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use(cors());
app.use(express.json());

app.get('/get', (req, res) => {
  TodoModel.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put('/update/:id', (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndUpdate({ _id: id }, { done: req.body.done })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.json(err));
});

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete({ _id: id }, { done: true })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.json(err));
});

app.post('/add', (req, res) => {
  const task = req.body.task;
  TodoModel.create({ task: task })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.json(err));
  console.log('Received task:', task);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('server is running ');
});
