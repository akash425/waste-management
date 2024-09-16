const User = require('../models/User');

exports.register = async (req, res, next) => {
    try {
        const { username, email, password, role, mobile } = req.body;
        const user = new User({ username, email, password, role, mobile });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        return next(new AppError(error.message, 500));
    }
};
