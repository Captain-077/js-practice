import React, {useRef, useEffect} from 'react';

function AddTodoComponent(props) {
  const inputRef = useRef();
  const addBtnRef = useRef();

  useEffect(() => {
    //console.log('calls on once or first time when component render')
    //console.log('addBtnRef', addBtnRef)
    addBtnRef.current.disabled = true;
    inputRef.current.focus();
  }, [])


  function handleInputTextChange(event) {
    let inputText = event.target.value;
    //console.log('input text has----', inputText, ' and length is', inputText.length);
    if(inputText.trim().length > 0) {
      //updateAddButtonDisable(false);
      addBtnRef.current.disabled = false;
    } else {
      //updateAddButtonDisable(true);
      addBtnRef.current.disabled = true;
    }
  }

  function handleAdd(){
    const { addTodo } = props;
    const text = inputRef.current.value;
    addTodo(text);
    inputRef.current.value = '';
    addBtnRef.current.disabled = true;
  }

  return (
    <div>
      <input 
        ref={inputRef} 
        placeholder='add todo text' 
        onChange={handleInputTextChange} />
      <button 
        onClick={handleAdd}
        ref={addBtnRef}
      >Add</button>
    </div>
  )

}

export default AddTodoComponent;