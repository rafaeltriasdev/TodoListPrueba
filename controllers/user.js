const usersRouter= require('express').Router(); // Importa el enrutador de Express



usersRouter.post('/', async (request, response) => {
    const { name, email, password } = request.body;

    if (!name || !email || !password) {
        return response.status(400).json({error: 'Todos los campos son obligatorios' });
    }
});

module.exports = usersRouter;