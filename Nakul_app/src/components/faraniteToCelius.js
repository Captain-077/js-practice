import { useState } from "react";
import { useRef } from "react";





function TempConvert(){

    const currentRef =useRef();
    // const [word,updeteValue] = useState()

function handleClick(){
    const input = currentRef.current.value

    const len = input.length;
    let storeWord = ""

    console.log("value",input)
    console.log("length",len)



    updeteValue(storeWord)
    return storeWord
}
    return(
        <div>

<input type="text"  ref={currentRef}/>
<button onClick={handleClick}>convert to word rupee</button>

<div>{word}</div>

        </div>
    )
}

export default TempConvert;