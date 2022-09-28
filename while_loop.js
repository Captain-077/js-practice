// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const voterList = [{
    name: "person",
    hobbies: ["music", "reading"],
    children: [{ name: "tina", age: 5 }]
}]


const filterList = [];
const len = voterList.length;
let index = 0;
while (index < len) {

    const voter = voterList[index];
    const hobbyIndex = voter.hobbies.indexOf("reading");

    if (hobbyIndex != -1) {
        filterList.push(voter);

    }
    index += 1;

}

console.log('My filtered list is', filterList);







//////////////////////////////////