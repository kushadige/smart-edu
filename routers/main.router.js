import express from 'express';
import mainController from '../controllers/main.controller.js';

const router = express.Router();

router.get('/', mainController.getHomePage);
router.get('*', (req, res) => {
    res.sendStatus(404);
});

export default router;
