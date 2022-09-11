import express from 'express';
import mainRouter from './routers/main.router.js';

const app = express();

// middlewares
app.use(mainRouter);

const port = 3000;
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
