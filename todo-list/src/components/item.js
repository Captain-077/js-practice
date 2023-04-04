
// import {todos,updateTodos} from './container'


function Item(props) {
    const { id, text,status,handlemarkdone,handleMarkEdit,editing} = props;

  

    return (
        <li key={id}>
           {editing ? (<input defaultValue={text}  id={'input-todo--'+id} />) :(<span>{text}</span>)}


           {editing !== true  && (
            <button id={'btn-done--' + id} onClick={handlemarkdone} disabled={status === 'done'}>Mark Done</button>

           )}
            <button id={'btn-done--' + id} onClick = {handleMarkEdit} disabled={status === 'done'}> {editing ? 'Edit done' : 'Edit'}</button>
            <button>Delete</button>

    
        </li>
    )


}

export default Item;