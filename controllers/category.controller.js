import Category from '../models/category.model.js';

export const createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json({
            status: 'success',
            category,
        });
    } catch (err) {
        res.status(400).json({
            status: 'failure',
            category: null,
        });
    }
};

const categoryController = {
    createCategory,
};

export default categoryController;
