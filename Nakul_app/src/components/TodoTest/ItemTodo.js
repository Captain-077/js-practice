function ItemTodo(props) {
    const { text, id } = props;

    return (
        <div>
            <li id={id}>
                <p>{text}</p>
                <button id = {id} onClick = {handleEdit}>Edit</button>
                <button id = {id} onClick = {handleMarkDone}>Done</button>
                <button>Delete</button>
            </li>
        </div>
    )


function  handleEdit(){


}


function handleMarkDone(){


}


}

export default ItemTodo;