const wordOne = 'race';
const wordTwo = 'care';

function stringToObjectMap(word) {
    const output = {}
    const len = word.length;
    let index = 0;
    while (index < len) {
        const char = word.charAt(index)
        console.log('char ', char, output[char])
        if (output[char]) {
            output[char] += 1;
        } else {
            output[char] = 1;
        }
        index++;
    }
    return output;
}

const objectMapOne = stringToObjectMap('dessert');
console.log(objectMapOne);





// Second approach





let wordOne = "race"
let wordTwo = "care"


const output = {}
const len = wordOne.length;
let index = 0;
while (index < len) {
    const char = wordOne.charAt(index)
        // console.log('char ', char, output[char])
    if (output[char]) {
        output[char] += 1;
    } else {
        output[char] = 1;
    }
    index++;
}

let keseBhi = Object.keys(output)

console.log(output)
console.log(keseBhi)

// const objectMapOne = stringToObjectMap('dessert');
// console.log(objectMapOne);




// let wordOne = "race"
// let wordTwo = "care"


const output2 = {}
const len2 = wordTwo.length;
let index2 = 0;
while (index2 < len2) {
    const char2 = wordTwo.charAt(index2)
        // console.log('char ', char, output[char])
    if (output2[char2]) {
        output2[char2] += 1;
    } else {
        output2[char2] = 1;
    }
    index2++;
}

console.log(output2)


// while(index < len){
//     let kuchBhi = output[index]

//     if(){

//     }

//     index++;

// }