const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const handleAuth = async (req, res) => {
    const { id, pin } = req.body;
    if (!id || !pin) {return res.status(400).json({message: `Student id and pin required`})};
    const foundUser = await User.findOne({studentId: id}).exec();
    if (!foundUser) {return res.status(401).json({message: `Student id ${id} not found`})};
    const roles = await Object.values(foundUser.roles);
    const match = await bcrypt.compare(pin, foundUser.pin);
    if (match) {
        const accessToken = jwt.sign(
            {
                userInfo: {
                    studentId: id,
                    roles: roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '300s'}
        )

        const refreshToken = jwt.sign(
            {
                studentId: id
            },
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
        )

        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();

        res.cookie('jwt', refreshToken, {httpOnly: true, sameSite: 'None', /*secure: true,*/ maxAge: 24 * 60 * 60 * 1000})

        res.status(200).json({id, accessToken, roles});
    } else {
        res.status(401);
    }
}

module.exports = handleAuth;