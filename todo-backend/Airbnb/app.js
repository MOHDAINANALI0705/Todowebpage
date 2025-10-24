const express = require('express');

const path=require('path');

const { default: mongoose }= require('mongoose');
const DB_path='mongodb+srv://AinanAli:Ainanali786*@ainan.lbgrfz1.mongodb.net/todo?retryWrites=true&w=majority&appName=Ainan';
const rootDir= require('./utils/pathutils');
const ErrorController= require('./controllers/error');
const {TodoItemRouter} = require('./routes/TodoItemRouter')
const cors =require('cors');

const app = express();
app.set('view engine','ejs');
app.set('views','views')

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());


app.use("/api/todo",TodoItemRouter)
app.use(ErrorController.handleError);

const PORT=3000;

mongoose.connect(DB_path).then(()=>{
app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})
}).catch(err=>{
  console.log(err);
});
