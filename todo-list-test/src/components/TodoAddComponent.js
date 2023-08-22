import { useRef } from "react"


export function TodoAddComponent(props) {

const{onAdd}=props;
const inputref = useRef();

function handleAdd(){

const text = inputref.current.value;
onAdd(text)

}
    return (

        <div>
            <input type='text' ref = {inputref}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    )

}