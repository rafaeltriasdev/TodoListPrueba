const loginRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const response  = require('express');
const jwt = require('jsonwebtoken');

loginRouter.post('/' , async (request, response) => {
    const { email, password } = request.body;
    const userExist = await User.findOne({ email });
    // console.log(email, password);
    
    if (!userExist) {
        return response.status(400).json({ error: 'Email o contraseña incorrectos' });
    }

    if(!userExist.verified) {
        return response.status(400).json({ error: 'Email no verificado' });
    }

    const isCorrect = await bcrypt.compare(password, userExist.passwordHash); //repasar
    
    if (!isCorrect) {
        return response.status(400).json({ error: 'Email o contraseña incorrectos' });
    }

const userForToken = {
    id: userExist.id,
}

const accessToken = jwt.sign(userForToken, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1d'
});

response.cookie('accessToken', accessToken, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 1), // 1 day in milliseconds
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    httpOnly: true // Prevents client-side JavaScript from accessing the cookie
    
});

return response.sendStatus(200);

});

module.exports = loginRouter; 