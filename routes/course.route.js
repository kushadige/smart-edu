import express from 'express';
import courseController from '../controllers/course.controller.js'; 
import roleMiddleware from '../middlewares/role.middleware.js';

const router = express.Router();

router.post('/', roleMiddleware(["teacher", "admin"]), courseController.createCourse);
router.get('/', courseController.getAllCourses);
router.get('/:course_url', courseController.getSingleCourse);

export default router;