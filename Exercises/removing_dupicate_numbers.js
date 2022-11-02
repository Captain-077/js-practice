const input = [1, 3, 7, 5, 3, 10, 11, 1]

let index = 0
let value = 0
let len = input.length
let sorted = input.sort();
// console.log(sorted);

while (index < len) {
    let add = sorted[index]
    let sorted2 = sorted[index + 1]

    if (add == sorted2) {
        sorted.push();
    } else {
        console.log("no");
    }

    index++
}

console.log(input)