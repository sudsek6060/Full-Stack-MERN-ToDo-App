const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema ({
    title : {
        type: String,
        require: [true, 'Title is required' ]
    },
    task: [String]
})

module.exports = mongoose.model("Todo", todoSchema);