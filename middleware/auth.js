const jwt = require('jsonwebtoken');

const userExtractor = async (req, res, next) => {
    try{
        const token = req.cookies?.accessToken;
    if (!token) {
        res.sendStatus(401);
    }

    const badToken = jwt.sign('jajajajaaaa', 'hola');

    const decoded = jwt.verify(badToken, process.env.ACCESS_TOKEN_SECRET);
    console.log(decoded);
    } catch (error) {
        res.sendStatus(403); // Forbidden if token is invalid
        
    }
    next();
};


module.exports = { userExtractor };