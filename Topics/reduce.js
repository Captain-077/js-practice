const numberArray = [3, 5, 7, 8];

const result = numberArray.reduce(processFn, 0);
console.log("result", result);

function processFn(result, nextItem) {
    console.log("result --> ", result);
    console.log("next item", nextItem);
    result += nextItem;
    return result;
}

const person = ["Pervez", 36];
const personObj = { name: "Pervez", age: 36 };