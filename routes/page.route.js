import express from 'express';
import pageController from '../controllers/page.controller.js';
import redirectMiddleware from '../middlewares/redirect.middleware.js';

const router = express.Router();

router.get('/', pageController.getHomePage);
router.get('/about', pageController.getAboutPage);
router.get('/contact', pageController.getContactPage);
router.get('/register', redirectMiddleware, pageController.getRegisterPage);
router.get('/login', redirectMiddleware, pageController.getLoginPage);

export default router;
