import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';

import pageRoute from './routes/page.route.js';
import courseRoute from './routes/course.route.js';
import categoryRoute from './routes/category.route.js';
import userRoute from './routes/user.route.js';

const app = express();

// connect DB
mongoose.connect('mongodb://localhost/smart-edu-db')
    .then(() => {
        console.log('mongodb successfully connected.');
    });

// template engine
app.set('view engine', 'ejs');

// global variable
global.userIN = null;

// middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/smart-edu-db' })
}));

// routes
app.use('*', (req, res, next) => {
    userIN = req.session.userID;
    next();
});
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/category', categoryRoute);
app.use('/users', userRoute);
app.get('*', (req, res) => {
    res.sendStatus(404);
});

const port = 3000;
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
