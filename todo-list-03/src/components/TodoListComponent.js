import TodoItemComponent from "./TodoItemsComponent";

function TodoListComponent(props) {
  const { list, onMarkDone, onDelete } = props
  return (
    <ul className="todo-list">
      {
        list.map((item) => {
          return <TodoItemComponent 
          id={item.id} text={item.text} key={item.id}
          onMarkDone={onMarkDone} status = {item.status}
          onDelete = {onDelete}
          />
        })
      }
    </ul>
  ) 
}

export default TodoListComponent;