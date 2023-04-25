function TodoItemComponent(props) {
    const { text, id, onMarkDone, status, onDelete } = props;


function renderActions(){

if(status == 'active'){
return(
  <>
  <button id={`${id}-edit`} >Edit</button>
  <button id={`${id}-done`} onClick={onMarkDone}>Done</button>
  </>
)}

else{
  return null;
}

}

function handleDelete(event){

  const id = event.target.id.split('-')[0];
// console.log('id',id); 
onDelete(id)
}

    return (
      <li className="todo-item">
        <p>{text}</p> 
        <div className="todo-item-actions">
         {renderActions()}
          <button id={`${id}-delete`} onClick={handleDelete}>Delete</button>
        </div>
      </li>
    )
  }
  
  export default TodoItemComponent