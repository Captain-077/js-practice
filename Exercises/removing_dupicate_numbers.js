const input = [1, 10, 3, 7, 5, 3, 10, 11, 1]

let index = 0
let len = input.length
let sorted = input.sort();
let newArr = []
let dupArr = []
    // console.log(sorted);

while (index < len) {
    let add = sorted[index]
    let sorted2 = sorted[index + 1]

    if (add !== sorted2) {
        newArr.push(add);
    } else {
        dupArr.push(add);
    }

    index++
}

console.log("sorted values", input)
console.log('After removing duplicate arrrays', newArr)
console.log('removed duplicate arrrays', dupArr)