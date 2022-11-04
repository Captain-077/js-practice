const input = [1, 2, 3, 8, 8, 6, 65, 72, 6, 6, 6, 6]

let index = 0;
let len = input.length
const newArr = []

while (index < len) {
    let StoredVal = input[index];
    if (newArr.indexOf(StoredVal) == -1) {
        newArr.push(StoredVal);
    }

    index++
}

console.log("before", input)
    // console.log(StoredVal)
console.log(newArr)