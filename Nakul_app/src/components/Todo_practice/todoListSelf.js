import { useRef, useState } from "react"



function TodoListself() {


    const inputref = useRef();
    const [todos, updateTodos] = useState([]);

    function renderitem(item) {
        const { text, id, status } = item
        return (
            < li key={id} >
                <span>{text}</span>
                <span>{status}</span>
            </li >
        )
    }



    function addTodo() {
        const todo = { id: Date.now(), text: inputref.current.value, status: "pending" }
        const newTodos = JSON.parse(JSON.stringify(todos));
        newTodos.push(todo)
        updateTodos(newTodos)
        inputref.current.value = ""
    }


    return (
        <>
            <div>

                <button onClick={addTodo}>Add</button>
                <input type="text" ref={inputref} />

            </div>

            <ul>
                {
                    todos.map(renderitem)
                }
            </ul>

        </>

    )

}

export default TodoListself