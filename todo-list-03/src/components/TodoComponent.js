import TodoAddComponent from "./TodoAddComponent";
import TodoListComponent from "./TodoListComponent";
import "../styles/todo.css";
import {useTodosHook} from  "../hooks/useTodosHook";



function TodoComponent() {
const {list, markDone,addItem,deleteItem,updateText} = useTodosHook();

  return (
    <div className="todo-container">
      <TodoAddComponent onAdd = {addItem}/>
      <TodoListComponent list={list} onMarkDone={markDone} onDelete={deleteItem} onUpdateText={updateText} />
    </div>
  )
}

export default TodoComponent;