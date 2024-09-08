const { default: mongoose } = require("mongoose");

const Schema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    isCompleted: { type: Boolean, default: false }
}, {
    timeStamp: true
})

const TodoModel = mongoose.models.todos || mongoose.model('todos', Schema)
export default TodoModel