import { useRef, useState } from "react"
import './todolist.css'

function TodoListUnc() {

    const inputref = useRef()
    const [todos, updateTodos] = useState([{ id: '' + Date.now(), text: 'default todo item', status: 'active', editing: true }
    ]);
    const [addButtonDisable, updateAddButtonDisable] = useState(true);

    // function renderItem(item) {
    //     const { text, id, status } = item
    //     return (
    //         <li key={id}>
    //             <span>{text}</span>
    //             <span>{status}</span>
    //         </li>
    //     )
    // }

    function addTodo() {
        const todo = { text: inputref.current.value, id: '' + Date.now(), status: 'active', editing: false }
        const newTodos = JSON.parse(JSON.stringify(todos));
        newTodos.push(todo);
        updateTodos(newTodos)
        inputref.current.value = ""

    }

    function renderTodoAdder() {
        return (
            <div className="addbody">
               
                    <input ref={inputref} placeholder='Add your task' onChange={handleInputTextChange} />
                    <button onClick={addTodo} disabled={addButtonDisable}>ADD</button>
               
            </div>
        )
    }


    function handleInputTextChange(event) {
        let inputText = event.target.value;
        console.log('input text has----', inputText, ' and length is', inputText.length);
        if (inputText.trim().length > 0) {
            updateAddButtonDisable(false);
        } else {
            updateAddButtonDisable(true);
        }
    }

    function renderList() {
        return (
            <ul className="todotask">
                {
                    todos.map((todo) => {
                        const { id, text, status, editing } = todo;
                        return (

                            <li key={id} className={getTodoStatusClass(status)}>

                                {editing ? (<input defaultValue={text} id={'input-todo--' + id} />) : (<span className="finalTask">{text}</span>)}
                                {/* <p>{text}</p> */}
                                <button
                                    id={'btn-done--' + id}
                                    onClick={handleMarkDone}
                                    disabled={status === 'done'}>
                                    Mark Done
                                </button>

                                <button
                                    className="orange"
                                    id={'btn-edit--' + id}
                                    onClick={handleEdit}
                                    disabled={status === 'done'}>
                                    {editing ? 'Edit Done' : 'Edit'}
                                </button>

                                <button className="red">Delete</button>

                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    function handleMarkDone(event) {
        let id = event.target.id;
        id = id.split('--')[1];
        // function findFn(todo) {
        //   return id === todo.id
        // }
        // const index = todos.findIndex(findFn);
        const index = todos.findIndex((todo) => id === todo.id);
        const todo = { ...todos[index], status: 'done' }
        const newTodos = [...todos];
        newTodos[index] = todo;
        updateTodos(newTodos);
    }

    function handleEdit(event) {

        let id = event.target.id;
        id = id.split('--')[1];
        const index = todos.findIndex((todo) => id === todo.id);

        const todo = { ...todos[index] };
        if (todo.editing) {
            const inputTodoEle = document.getElementById('input-todo--' + id)
            todo.text = inputTodoEle.value;
        }


        todo.editing = !todo.editing;

        const newTodos = [...todos];
        newTodos[index] = todo;
        updateTodos(newTodos);
    }


    function getTodoStatusClass(status) {
        if (status == 'active') {
            return 'active'
        } else if (status === 'done') {
            return 'done', 'finaltaskdone'
        } else {
            return ''
        }
    }




    return (

        <div className="todoBody">
            <div>
                {renderTodoAdder()}
                {renderList()}
            </div>

        </div>


    )

}

export default TodoListUnc 