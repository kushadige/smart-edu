import Course from '../models/course.model.js';

export const createCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json({
            status: 'success',
            course
        });
    }
    catch(err) {
        res.status(400).json({
            status: 'failure',
            course: null     
        });
    }
}

export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).render('courses', {
            page_name: 'courses',
            courses
        });
    }
    catch(err) {
        res.status(404).json({
            status: 'failure',
            courses: null,
        });
    }
}

export const getSingleCourse = async (req, res) => {
    const { course_url } = req.params;
    try {
        const course = await Course.findOne({ slug: course_url });
        res.status(200).render('course', {
            page_name: 'courses',
            course
        });
    }
    catch(err) {
        res.status(404).json({
            status: 'failure',
            course: null,
        });
    }
}

const courseController = {
    createCourse,
    getAllCourses,
    getSingleCourse
}

export default courseController;