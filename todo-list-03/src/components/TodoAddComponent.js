import { useRef } from 'react';

function TodoAddComponent(props) {
const{onAdd} = props;
const inputRef = useRef()

function handleAdd(){
const text = inputRef.current.value; 
onAdd(text);

}

    return (
      <div className="todo-add">
        <input type="text" ref = {inputRef}/>
        <button onClick={handleAdd}>Add</button>
      </div>
    )
  }
  
  export default TodoAddComponent;