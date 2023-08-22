import TodoAddComponent from "./AddBtnComponent";
import TodoListComponent from "./listComponent"


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