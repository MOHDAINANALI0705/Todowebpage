const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
task: { type: String, required: true },
date: { type: Date, required: true },
completed: { type: Boolean, default: false },
});


module.exports = mongoose.model('Todo',UsersSchema);