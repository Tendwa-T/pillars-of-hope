const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.id = decoded.id;
        next();
    } catch (error) {
        console.log(error.message)
        if (error.message === 'jwt expired') {
            return res.status(401).json({ message: 'Session expired', redirect: true });
        }
        return res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = authenticateToken;
