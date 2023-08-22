import { TodoAddComponent } from "./TodoAddComponent";
import { TodoListComponent } from "./TodoListComponent";
import { TodoHooks } from "../Hooks/TodoHooks";

export function TodoComponent(){

    const{list,addItem,markdone,deleteItem} = TodoHooks();
    // console.log(list);

return(

<div>
<TodoAddComponent onAdd={addItem}/>
<TodoListComponent list={list} onMarkDone={markdone} onDelete={deleteItem}/>
</div>

)

}