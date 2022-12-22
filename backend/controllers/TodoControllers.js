const Todo = require("../model/TodoSchema");

exports.createTitle = async (req, res) => {
    try {
        const { title } = req.body
        if (!title) {
            throw new Error('Title is required')
        }
        const todo = await Todo.create({ title });
        res.status(200).json({
            success: true,
            message: 'Title created successfully',
            todo
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Title creation failed'
        })
    }
}

exports.getTitles = async (req, res) => {
    try {
        const titles = await Todo.find()
        res.status(200).json({
            success:true,
            titles
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: 'Unable to load Titles'
        })
    }
}
exports.deleteTitle = async(req, res) => {
    try {
        const titleId = req.params.id;
        const title = await Todo.findByIdAndDelete(titleId);
        res.status(200).json({
            success: true,
            message: 'Title deleted'
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: 'Unable to delete title'
        })
    }
}