import mongoose from 'mongoose';
import slugify from 'slugify';

// create schema
const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    slug: {
        type: String,
        unique: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }
});

CourseSchema.pre('validate', function(next){
    this.slug = slugify(this.name, {
        lower: true,
        strict: true
    });
    
    next();
});

const Course = mongoose.model('Course', CourseSchema);

export default Course;
