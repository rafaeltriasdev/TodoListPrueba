const { request } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const userExtractor = async (request, response, next) => { 
    // console.log(request.cookies.accessToken);
    try {
        const token = request.cookies?.accessToken;
    if (!token) {
        return response.sendStatus(401);
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded.id);
    request.user = user; // Attach the user to the request object
    }
    
    catch (error) {
    return response.sendStatus(403); // Forbidden if token is invalid
    }
    next();
};


module.exports = { userExtractor };