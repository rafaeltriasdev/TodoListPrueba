const { request } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const userExtractor = async (request, response, next) => { 
    const token = (request.cookies?.accessToken);

    try {
    if (!token) {
        return response.sendStatus(401);
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log(decoded);
    const user = await User.findById(decoded.id);
    // console.log(user);
    request.user = user; // Attach the user to the request object
    }
    
    catch (error) {
        // console.log(error);
    return response.sendStatus(403); // Forbidden if token is invalid
    }
    next();
};


module.exports = { userExtractor };