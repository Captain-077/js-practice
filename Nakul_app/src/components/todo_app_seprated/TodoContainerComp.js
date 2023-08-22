import { useState } from "react"
import AddTodoComponent from "./AddtodoComponent"
import TodoItemComponent from "./ToDoItemComp"



function TodoContainerComponent(){

const [todoList,updatetoDoList] = useState([]);

function addTodoItem(text){

   const cloneToDoList = [...todoList] 
   const newTodoItem = {
    text,id: Date.now().toString() 
   }

   cloneToDoList.push(newTodoItem);
   updatetoDoList(cloneToDoList)
}





return(
<div>
    <h2>TODO length: {todoList.length}</h2>
    <AddTodoComponent onTodoAdd={addTodoItem}/>
</div>


)

}

export default TodoContainerComponent;