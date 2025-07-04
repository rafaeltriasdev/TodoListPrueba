const usersRouter= require('express').Router(); // Importa el enrutador de Express

usersRouter.post('/', async (request, response) => {
    const { name, email, password } = request.body;
    console.log(email, name, password);
});

module.exports = usersRouter;

