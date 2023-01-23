import { useState } from "react"


function ComponentTodoList() {
    const [ currentValue, updatedValue ] = useState('')
    const [todos , updateTodos] = useState([])

    function handleOnchange(event){
        updatedValue(event.target.value)
    }

    function renderItem(item){
      const {text , id , status}=item
      return(
        <li key={id}>
         <span>{text}</span>
         <span>{status}</span>
        </li>
      )
    }

    function addTodo() {
        const todo = {text:currentValue , id:Date.now(),status:''}
        const newTodos = JSON.parse(JSON.stringify(todos));
        newTodos.push(todo);
        updatedValue('');
        updateTodos(newTodos)
        
    }
    return (
        <div>
            <div>
                <button onClick={addTodo}>Add</button>
                <input type='text' value={currentValue} onChange={handleOnchange}/>
                </div>
                <ul>
                    {
                        todos.map(renderItem)
                    }
                </ul>
                
        </div>
    )
}
export default ComponentTodoList;