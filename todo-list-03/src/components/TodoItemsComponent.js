import { useState,useRef } from "react";

function TodoItemComponent(props) {
    const { text,id,status, onMarkDone,onDelete,onUpdateText } = props;

  const[isEditing,setEditing] = useState(false);
  const inputRef = useRef()



function renderActions(){

if(status == 'active'){
return(
  <>
  <button id={`${id}-edit`} onClick={handleEdit} >
    
    {isEditing ? `Edit done`: `Edit`}
    
    </button>
  <button id={`${id}-done`} onClick={onMarkDone}>Done</button>
  </>
)}

else{
  return null;
}

}

function handleEdit(){
if(isEditing){
const updatedText = inputRef.current.value; 
onUpdateText(id,updatedText)
}
setEditing(!isEditing)

}

function handleDelete(event){

  const id = event.target.id.split('-')[0];
// console.log('id',id); 
onDelete(id)
}

    return (
      <li className="todo-item">
       {isEditing ? <input defaultValue = {text} ref = {inputRef} /> :  <p>{text}</p>} 
       
        <div className="todo-item-actions">
         {renderActions()}
          <button id={`${id}-delete`} onClick={handleDelete}>Delete</button>
        </div>
      </li>
    )
  }
  
  export default TodoItemComponent