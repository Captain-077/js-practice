import { useRef, useState } from 'react';


// control form

function ControlForm() {

    const [CurrentValue, ChangeValue] = useState("poora")

    function handleValue(event) {
        console.log(event)

        ChangeValue(event.target.value)

    }

    return (

        <div>
            <input type="text" value={CurrentValue} onChange={handleValue} />
            <input type="submit" />
        </div>
    )


}




// uncontrol form

function UnControlForm() {
    
    const inputref = useRef()
    
    function handleValue(event) {
        

      console.log(inputref)

    }
    

    return (

        <div>
            <input type="text" value={text} ref={inputref} />
            <input type="submit"  onClick={handleValue}/>
        </div>
    )


}


export default ControlForm;
export{UnControlForm};