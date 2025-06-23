const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://mongo:27017/todoapp');

const Todo = mongoose.model('Todo', {
    title: String,
    completed: { type: Boolean, default: false }
});

app.get('/api/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

app.post('/api/todos', async (req, res) => {
    const todo = new Todo({ title: req.body.title });
    await todo.save();
    res.json(todo);
});

app.listen(3000, () => console.log('Server on port 3000'));