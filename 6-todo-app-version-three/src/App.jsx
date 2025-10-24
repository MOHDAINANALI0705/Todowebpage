import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useEffect, useState } from "react";
import { addItemToServer, deleteItem, getItems } from "./services/itemServices";

function App() {
  const [todoItems, setTodoItems] = useState([]);

useEffect(()=>{
  getItems().then((item)=>{
    setTodoItems(item);
  })
},[])
 
  const handleNewItem = async (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const item = await addItemToServer(itemName,itemDueDate);

    const newTodoItems = [
      ...todoItems,item];
    setTodoItems(newTodoItems);
  };

  const handdleToggleCompleted= async(id) =>{
    await markCompleted(id);
    const updatedItem = todoItems.map((item)=>{
      if(item.id === id){
        return {...item,completed:true}
      }
      return item;
    })

    setTodoItems(updatedItem);
  }

  const handleDeleteItem = async (id) => {
    const deletedId =await deleteItem(id);
    const newTodoItems = todoItems.filter((item) => item.id !== deletedId);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
