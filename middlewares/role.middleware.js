import User from "../models/user.model.js";

export default (roles) => {
    return (req, res, next) => {
        User.findById(req.session.userID, (err, user) => {
            if(!err) {
                const userRole = user.role;
                if(roles.includes(userRole)) {
                    next();
                } else {
                    res.status(401).json({
                        status: 'Unauthorized',
                    });
                }
            } else {
                res.status(401).json({
                    status: 'Unauthorized',
                });
            }
        });
    }
}