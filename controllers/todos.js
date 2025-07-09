const todosRouter = require('express').Router();
const User = require('../models/user');
const Todo = require('../models/todo');
const { response } = require('../app');

todosRouter.get('/', async (require, response) => {
    console.log('chao')

        // const todos = await Todo.find({ user: 'jajajaja' })
        // return response.status(200).json(todos);
});

module.exports = todosRouter;