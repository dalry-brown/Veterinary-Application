const jwt = require('jsonwebtoken');

const verifyJWT = async (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith("Bearer ")) {return res.status(401).json({message: 'Invalid JWT'})};
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
           if (err) return res.sendStatus(403);
           req.user = decoded.userInfo.studentId; 
           req.roles = decoded.userInfo.roles; 
           next();
        }
    )
}

module.exports = verifyJWT;