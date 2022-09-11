import express from 'express';
import courseController from '../controllers/course.controller.js'; 

const router = express.Router();

router.post('/', courseController.createCourse);
router.get('/', courseController.getAllCourses);
router.get('/:course_url', courseController.getSingleCourse);

export default router;