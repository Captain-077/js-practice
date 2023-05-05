import { useEffect, useRef } from 'react';

function TodoAddComponent(props) {
const{onAdd} = props;
const inputRef = useRef()
const addbuttonRef = useRef();


useEffect(() => {
addbuttonRef.current.disabled = true;

},[])

function handleTextChange(event){
const value = event.target.value

if(value.trim().length > 0){
  addbuttonRef.current.disabled = false;
}
else{
  addbuttonRef.current.disabled = true;
}
}




function handleAdd(){
const text = inputRef.current.value; 

// if(text !== ""){
  onAdd(text.trim());
// }
// else{
//   return null;
// }

//clean up
inputRef.current.value = "";
addbuttonRef.current.disabled = true;

}

    return (
      <div className="todo-add">
        <input type="text" ref = {inputRef} onChange={handleTextChange}/>
        <button onClick={handleAdd} ref = {addbuttonRef}>Add</button>
      </div>
    )
  }
  
  export default TodoAddComponent;