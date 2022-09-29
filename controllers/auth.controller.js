import User from '../models/user.model.js';
import Category from '../models/category.model.js';
import bcrypt from 'bcrypt';

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        req.session.userID = user._id;
        res.status(201).redirect('/');
    }
    catch(err) {
        res.status(400).json({
            status: 'failure',
            user: null
        });
    } 
}
export const getAllUsers = async (req, res) => {
    if(req.session.userID){
        try {
            const users = await User.find();
            res.status(200).json({
                status: 'success',
                users
            });
        }
        catch(err) {
            res.status(400).json({
                status: 'failure',
                users: null
            });
        }
    } else {
        res.status(403).json({
            status: 'forbidden',
            users: null,
        });
    }
}
export const checkUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email});

        if(!user){
            res.status(404).json({
                status: 'user not found',
                user: null
            });
        }
        else {
            const isPasswordTrue = await bcrypt.compare(password, user.password);

            if(isPasswordTrue){
                // USER SESSION
                req.session.userID = user._id;
                res.status(200).redirect('/users/dashboard');
            } else {
                res.status(400).json({
                    status: 'wrong password',
                    user: null
                });
            }
        }
    }
    catch(err) {
        res.status(400).json({
            status: 'failure',
            user: null
        });
    }
}
export const logOutUser = (req, res) => {
    req.session.userID = null;
    req.session.destroy(() => {
        res.redirect('/');
    });
}
export const getDashboard = async (req, res) => {
    if(req.session.userID) {
        try {
            const user = await User.findById(req.session.userID);
            const categories = await Category.find();
            res.status(200).render('dashboard', {
                page_name: 'dashboard',
                user,
                categories
            });
        }
        catch(err) {
            res.status(400).json({
                status: 'failure',
                user: null
            });
        }
    } else {
        res.status(403).redirect('/login');
    }
}

const authController = {
    createUser,
    getAllUsers,
    checkUser,
    logOutUser,
    getDashboard,
}

export default authController;