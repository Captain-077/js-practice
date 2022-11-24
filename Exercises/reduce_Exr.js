const person = ["Pervez", 36];

const result = person.reduce(processFn, 0);
const nextItem = person.reduce(processFn, 0);
// console.log("result", result);

function processFn(result, nextItem) {
    console.log(`name: ${result}`, `age: ${nextItem}`)
    return result, nextItem;
}

const obj = {}
obj.name = `${result}`
obj.age = `${nextItem}`

console.log(obj)