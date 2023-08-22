import TodoAddComponent from "./TodoAddComponent";
import TodoListComponent from "./TodoListComponent";
import "../styles/todo.css"

const todoListArray = [
  'Todo item one',
  'Todo item two',
  'Todo item three is the latest one'
]

function TodoComponent() {
  return (
    <div className="todo-container">
      <TodoAddComponent />
      <TodoListComponent list={todoListArray} />
    </div>
  )
}

export default TodoComponent;