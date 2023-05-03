import TodoItemComponent from "./TodoItemsComponent";

function TodoListComponent(props) {
  const { list, onMarkDone, onDelete,onUpdateText } = props

  return (
    <ul className="todo-list">
      {
        list.map((item) => {
          return <TodoItemComponent 
          id={item.id} text={item.text} key={item.id}
          onMarkDone={onMarkDone} status = {item.status}
          onDelete = {onDelete} onUpdateText= {onUpdateText}
          />
        })
      }
    </ul>
  ) 
}

export default TodoListComponent;