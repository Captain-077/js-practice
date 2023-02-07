import { useState } from 'react';
import AddTodoComponent from "./addTodoComponent";
import TodoListComponent from './todoListComponent';

function TodoContainerComponent() {
  const [todos, updateTodos] = useState([
    {id:''+Date.now(), text:'default todo item', status:'active', editing:true }
  ]);
  console.log('todos list length', todos.length);

  function addTodo(text) {
    const item = {
      id: ''+Date.now(),
      text,
      status: 'active',
      editing: false
    }
    const newTodos = [...todos];
    newTodos.push(item);
    updateTodos(newTodos);
  }

  

  return (
    <div>
      <AddTodoComponent addTodo={addTodo} />
      <TodoListComponent todos={todos}/>
    </div>
  )
}

export default TodoContainerComponent;