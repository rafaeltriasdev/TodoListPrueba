const todosRouter = require('express').Router();
const User = require('../models/user');
const Todo = require('../models/todo');
const { response } = require('../app');

todosRouter.get('/', async (request, response) => {
    const user = request.user;

        const todos = await Todo.find({ user: user.id })
        return response.status(200).json(todos);
});

todosRouter.post('/', async (request, response) => {
    const user = request.user;
    const { text } = request.body; 
    const newTodo = new Todo({
        text,
        checked: false,
        user: user._id
    });
const savedTodo = newTodo.save();

return response.status(201).json(savedTodo);

});


module.exports = todosRouter;