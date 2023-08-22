import { useRef } from "react";

function Addtodo(props) {

const {addTodo} = props;

const inputTextref = useRef();

function handleAddClick(){

const inputElement = inputTextref.current;
addTodo(inputElement.value);

}

    return (
        <div>
            <input type="text" ref = {inputTextref}/>
            <button onClick={handleAddClick}>Add</button>

        </div>
    )
}

export default Addtodo;