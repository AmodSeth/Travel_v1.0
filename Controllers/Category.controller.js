import Category from "../Models/Category.model.js";


export const getCatergory = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.json(categories)
    } catch (error) {
        res
            .status(404)
            .json({ message: error.message });
    }
}