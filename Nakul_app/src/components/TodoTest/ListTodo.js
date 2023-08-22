import ItemTodo from "./ItemTodo";

function ListTodo(props){

const {todos} = props

return(

<ul>
    {
    todos.map((todo)=>{
        const {id, text} = todo;
    return (<ItemTodo key = {id} text = {text}/>)

    })
}

</ul>

)
}

export default ListTodo;