function TodoItemComponent(props) {
    const { text } = props;
    return (
      <li className="todo-item">
        <p>{text}</p>
        <div className="todo-item-actions">
          <button>Edit</button>
          <button>Done</button>
          <button>Delete</button>
        </div>
      </li>
    )
  }
  
  export default TodoItemComponent