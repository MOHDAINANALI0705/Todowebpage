
const express = require('express');

const TodoItemRouter = express.Router();

const TodoItemController=require('../controllers/TodoItem');

TodoItemRouter.get('/',TodoItemController.getItems);
TodoItemRouter.post('/',TodoItemController.createItem);
TodoItemRouter.delete('/:id',TodoItemController.deleteItem);
TodoItemRouter.delete('/:id/completed',TodoItemController.markCompleted);

exports.TodoItemRouter= TodoItemRouter;