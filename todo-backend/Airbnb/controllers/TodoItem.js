const Todo = require('../models/TodoItems')

exports.createItem = async (req,res,next)=>{
    const {task,date} = req.body;
    const todoitem = new Todo({task,date})
   await todoitem.save().then(()=>{
        console.log("Item Created");
    })
    res.status(201).json(todoitem);
}

exports.getItems = async (req,res,next) =>{
const todoItem = await Todo.find();
res.json(todoItem);
}

exports.deleteItem = async (req,res,next)=>{
    const { id }=req.params.id;
    await Todo.findByIdAndDelete(id);
    res.status(204).json({_id:id});
}

exports.markCompleted = async (req,res,next) =>{
    const {id} = req.params.id;
    const todoItem = Todo.findById(id);
    todoItem.completed = true;
await todoItem.save();
res.json(todoItem);
}