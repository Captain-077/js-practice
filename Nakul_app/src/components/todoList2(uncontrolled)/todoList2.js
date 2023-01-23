import { useRef, useState } from "react"
import './todolist.css'

function TodoListUnc() {

    const inputref = useRef()
    const [todos, updateTodos] = useState([])
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
        const todo = { text: inputref.current.value, id: ""+Date.now(), status: 'active' }
        const newTodos = JSON.parse(JSON.stringify(todos));
        newTodos.push(todo);
        updateTodos(newTodos)
        inputref.current.value = ""

    }

    function renderTodoAdder() {
        return (
            <div>
                <input ref={inputref} placeholder='add todo text' onChange={handleInputTextChange}/>
                <button onClick={addTodo} disabled={addButtonDisable}>Add</button>
            </div>
        )
    }


    function handleInputTextChange(event) {
        let inputText = event.target.value;
        console.log('input text has----', inputText, ' and length is', inputText.length);
        if(inputText.trim().length > 0) {
          updateAddButtonDisable(false);
        } else {
          updateAddButtonDisable(true);
        }
      }

    function renderList() {
        return (
            <ul>
                {
                    todos.map((todo) => {
                        const { id, text, status } = todo;
                        return (
                            <li className={getTodoStatusClass(status)}>
                                <p>{text}</p>
                                <button
                                    id={'btn-done--' + id}
                                    onClick={handleMarkDone}
                                    disabled={status === 'done'}>
                                    Mark done
                                </button>
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

    function getTodoStatusClass(status) {
        if (status == 'active') {
            return 'active'
        } else if (status == 'done') {
            return 'done'
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