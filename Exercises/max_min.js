const arr = [4, 5, 2, 200, 3];

let max = arr[0]
let len = arr.length
let index = 0
while (index < len) {
    if (max < arr[index]) {
        max = arr[index]
    }
    index++
}
console.log(max)