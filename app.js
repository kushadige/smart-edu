import express from 'express';
import mongoose from 'mongoose';
import mainRoute from './routes/main.route.js';
import courseRoute from './routes/course.route.js';
import categoryRoute from './routes/category.route.js';

const app = express();

// connect DB
mongoose.connect('mongodb://localhost/smart-edu-db')
    .then(() => {
        console.log('mongodb successfully connected.');
    });

// template engine
app.set('view engine', 'ejs');

// middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', mainRoute);
app.use('/courses', courseRoute);
app.use('/category', categoryRoute);
app.get('*', (req, res) => {
    res.sendStatus(404);
});

const port = 3000;
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
