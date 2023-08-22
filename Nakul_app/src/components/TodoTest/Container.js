import { useState } from "react";
import Addtodo from "./AddTodo";
import ListTodo from "./ListTodo";

function Container(){

const[todos,updateTodos] = useState([
    {id:Date.now(), text:'default todo item'}
])


function addTodoItem(text){

const newTodos = [...todos];
const item = {
    id:Date.now().toString(),
    text
}

newTodos.push(item);
updateTodos(newTodos);
}



return(
    <div>
<Addtodo addTodo = {addTodoItem}/>
<ListTodo todos = {todos}/>

</div>

)

}

export default Container;