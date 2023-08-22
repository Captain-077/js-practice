function TodoItemComponent(props) {
    const { text, id } = props;
    return (

        <div>
            <li id = {id} > 

           <p>{text}</p>
           </li>


        </div>
    )


}


export default TodoItemComponent;