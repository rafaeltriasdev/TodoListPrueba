const jwt = require('jsonwebtoken');

const userExtractor = async (req, res, next) => {
    const token = req.cookies?.accessToken;
    if (!token) {
        return res.sendStatus(401);
    }
    
    const decdoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    next();
};

module.exports = { userExtractor };