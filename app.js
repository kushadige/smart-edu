import express from 'express';
import mainRouter from './routes/main.router.js';

const app = express();

// template engine
app.set('view engine', 'ejs');

// middlewares
app.use(express.static('public'));
app.use(mainRouter);

const port = 3000;
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
