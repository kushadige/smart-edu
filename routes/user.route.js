import express from 'express';
import authController from '../controllers/auth.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/signup', authController.createUser);
router.post('/signin', authController.checkUser);
router.get('/logout', authController.logOutUser);
router.get('/dashboard', authMiddleware, authController.getDashboard);
router.get('/', authController.getAllUsers);

export default router;