const arr = [2, 6, 9, 56, 1, 2, 150]

let firstMax = 0
let secMax = 0
let index = 0
let len = arr.length
while (index < len) {
    const storeValue = arr[index]
    if (firstMax < storeValue) {
        secMax = firstMax
        firstMax = storeValue
    }
    index++
}

console.log(firstMax);
console.log(secMax);