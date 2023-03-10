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
exports.createTask = async(req, res) => {
    try {
        const titleId = req.params.id;
        if (!titleId) {
            throw new Error('Unable to find title id')
        }
        const title = await Todo.findById(titleId);
        const {task} = req.body;
        title.tasks.push(task);
        await title.save();
        res.status(200).json({
            success: true,
            message: 'task added successfully',
            title
        })

    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: 'Create task failed'
        })
    }
}

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Todo.find()
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

exports.editTask = async(req, res) => {
    try {
        
        const task = await Todo.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success: true,
            message: 'task updated successfully',
            task
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: 'Unable to edit task'
        })
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const task = await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: 'Task deleted successfully'
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: 'Unable to delete task'
        })
    }
}