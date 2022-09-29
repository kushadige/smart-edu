import User from '../models/user.model.js';

export default (req, res, next) => {
    User.findById(req.session.userID, (err, user) => {
        if (err || !user) {
            return res.redirect('/login');
        }
        next();
    });
};
