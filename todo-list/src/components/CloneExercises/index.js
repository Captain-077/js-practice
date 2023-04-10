// const person = { name:"pawan" , sub:["english", "math"] }


// const person2 = {...person}

// const addsubject = [...person2.sub]
// addsubject.push("sst");
// // console.log(addsubject)

// // const NewSub = person2.sub.push(addsubject);
// // console.log(NewSub);

// person2.sub = addsubject;
// console.log(person2);

// console.log(person)



const person = { name: 'pervez', sub: ['english', 'math']};

// output person2 with one more sub but with same name
console.log('solution --- one ----- start')
const person2 = { ...person, sub: [...person.sub, 'computer']};
console.log('person', person);
console.log('person2', person2);
console.log('solution --- one ----- end')

// const arr1 = [10, 20]
// const arr = [...arr1, 30]

console.log('solution --- two ----- start')
const person3 = { ...person };
person3.sub = [...person3.sub];
person3.sub.push('Science');
console.log('person', person);
console.log('person3', person3);
console.log('solution --- two ----- end')


console.log('solution --- third ----- start')
const person4 = JSON.parse(JSON.stringify(person))
person4.sub.push('Arts')
console.log('person', person);
console.log('person4', person4);
console.log('solution --- third ----- end')