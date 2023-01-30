import { useRef, useState } from "react";
import './freshTodoList.css'

function FreshTodoList() {
const inputref = useRef()
const [todos, updatetodos] = useState([
    {id:''+Date.now(), text:'default todo item', status:'active', editing:true }
  ]);

 


    function renderItem(item) {
        const { text, id, status } = item;

        return (
            <div>
                <li key={id}>
                    <span>{text}</span>
                    <span>{status}</span>
                    <button
                    id={'btn-done--'+id}
                    onClick={handleMarkDone} 
                    disabled={status === 'done'}>
                      Mark done
                  </button>
                </li>

            </div>

        )
    }

    function handleMarkDone(event) {
        let id = event.target.id;
        id = id.split('--')[1];
        const index = todos.findIndex((todo) => id === todo.id);
        const todo = {...todos[index], status:'done'}
        const newTodos = [...todos];
        newTodos[index] = todo;
        updatetodos(newTodos);
      }

    function AddTodo() {
        const todo = { text: inputref.current.value, id: ""+Date.now(), status:"active"}
        const newTodos = JSON.parse(JSON.stringify(todos));
        newTodos.push(todo);
        updatetodos(newTodos);
        inputref.current.value = "";
      
    }

    return (

        <>
        <div className="main">
            <input className="input-design" type="text"  ref={inputref} />
            <button className="button-design" onClick={AddTodo}>Add</button>

            </div>

        <div className="design-ul">
        <ul>
        { todos.map(renderItem) }
        </ul>
        </div>

        </>

    );


};
export default FreshTodoList;