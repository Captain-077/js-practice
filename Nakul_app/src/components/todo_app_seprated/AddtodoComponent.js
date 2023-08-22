import { useRef } from "react";


function AddTodoComponent(props) {

    const { onTodoAdd } = props;
    const inputTextRef = useRef();

    function handleAddclick() {
        // inputTextRef = { current: <input type="text" ref={inputTextRef} /> };

        const inputElement = inputTextRef.current;
        onTodoAdd(inputElement.value);

        //clean up
        inputElement.value = "";

    }

    return (

        <div>
            <input type = "text" ref ={inputTextRef}/>
            <button onClick={handleAddclick}>Add</button>

        </div>
    )



}

export default AddTodoComponent;