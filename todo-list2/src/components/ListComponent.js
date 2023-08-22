import TodoItemComponent from "./TodoItemsComponent";

function TodoListComponent(props) {
  const { list } = props
  return (
    <ul className="todo-list">
      {
        list.map((arrItemValue) => {
          return <TodoItemComponent text={arrItemValue} />
        })
      }
    </ul>
  )
}

export default TodoListComponent;