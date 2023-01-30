import { useRef, useState } from "react";


function NumberToWord(event) {
  const currentRef = useRef();
  const disableBtn = useRef(true);
  // const displayWord = useRef();
  const [word, newWord] = useState();

  function handleChangeNumber() {
    const OnceMap = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];

    const tensMap = [
      "ten",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];

    let inputWord = currentRef.current.value;
    let numberToWordSave = "";

    //100,200,300,400,500,600,700,800,900
    if (inputWord > 99 && inputWord < 1000) {
      const hundredPlaceValue = parseInt(inputWord / 100);
      console.log("hundredPlaceValue " + hundredPlaceValue);
      let index = hundredPlaceValue - 1;
      console.log("hundredPlaceValue index " + index);
      numberToWordSave += " " + OnceMap[index] + " hundred";
      inputWord -= hundredPlaceValue * 100;
    }
    // 21 to 99
    if (inputWord > 20 && inputWord < 100 && inputWord % 10 !== 0) {
      console.log("inputWord " + inputWord);
      const tenPlaceValue = parseInt(inputWord / 10);
      console.log("tenPlaceValue " + tenPlaceValue);
      const index = tenPlaceValue - 1;
      numberToWordSave += " " + tensMap[index];
      console.log("21to 99 " + numberToWordSave);
      inputWord -= tenPlaceValue * 10;
    }
    //10,20,30,40,50,60,70,80,90
    if (inputWord <= 99 && inputWord % 10 == 0) {
      let index = inputWord / 10;
      numberToWordSave += tensMap[index - 1];
    }

    //1to 19
    if (inputWord > 0 && inputWord < 20 && inputWord != 10) {
      let index = inputWord - 1;
      numberToWordSave += " " + OnceMap[index];
      console.log("1to 19" + numberToWordSave);
    }
    if (inputWord == 0) {
      numberToWordSave = "Zero";
    }
    console.log("last word" + numberToWordSave);
    newWord(numberToWordSave);
    currentRef.current.value = "";
    disableBtn.current.disabled = true;
   

    return numberToWordSave;
  }

  function handleInputTextDisable(event) {
    const inputDisable = event.target.value;

    console.log("target value" + inputDisable);
    if (inputDisable.trim().length > 0) {
      disableBtn.current.disabled = false;
      console.log("button disable false");
    } else {
      disableBtn.current.disabled = true;
      console.log("button disable true hoja");
    }
  }

  return (
    <div className="wrapper">
      <h2>type only 1 to 999</h2>
      <input
        className="input-number"
        type="text"
        ref={currentRef}
        onChange={handleInputTextDisable}
        placeholder="enter number here"
      />
      <button onClick={handleChangeNumber} ref={disableBtn}>
        convert to word
      </button>
      <div className="change-word-here" >{word}</div>
    </div>
  );
}

export default NumberToWord;