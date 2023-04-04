import { useRef } from "react"

function Addtodo(props) {

    const {addtodo} =  props;

    const inputTextRef = useRef();

    function handleClick() {

        const inputRef = inputTextRef.current;
        addtodo(inputRef.value);

    }

    return (
        <div>
            <input type="text" ref={inputTextRef} />
            <button onClick={handleClick}>Add</button>
        </div>

    )
}

export default Addtodo;