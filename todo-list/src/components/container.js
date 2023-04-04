import { useState } from "react";
import Addtodo from "./addTodo";
import List from "./list";

function Container() {

    const [todos, updateTodos] = useState([]);

    function addTodoItem(text) {

        const newTodos = [...todos]
        const item = {
            id: Date.now().toString(),
            text,
            status: 'active',
            editing:false
        }
        newTodos.push(item)
        updateTodos(newTodos)

    }
    function handleMarkdone(event) {
        let id = event.target.id;
        console.log(id);
        id = id.split("--")[1];
        let index = todos.findIndex((todos) => id == todos.id );
        const todo = {...todos[index], status:'done'}
        const newTodos = [...todos];
        newTodos[index] = todo;
        updateTodos(newTodos);
        }

        function handleEdit(event) {
            let id = event.target.id;
            console.log(id);
            id = id.split("--")[1];
            let index = todos.findIndex((todos) => id == todos.id );
            const todo = {...todos[index]};

            if(todo.editing) {
                const inputTodoEle = document.getElementById('input-todo--'+id)
                todo.text = inputTodoEle.value;
              }
          
              todo.editing = !todo.editing;

            const newTodos = [...todos];
            newTodos[index] = todo;
            updateTodos(newTodos);
            }









    return (
        <div>
            <Addtodo addtodo={addTodoItem} />
            <List todos={todos}  handlemarkdone = {handleMarkdone} handleMarkEdit = {handleEdit} />
        </div>
    )
}

export default Container;