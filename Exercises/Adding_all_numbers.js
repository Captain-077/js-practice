const input = [1, 5, 7, 59, 20]

let index = 0
let output = 0
let len = input.length

while (index < len) {
    let add = input[index]
    output += add
    index++
}

console.log(output)