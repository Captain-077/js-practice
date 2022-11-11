//spread operator
const Arr = [1, 2, 3, 6, 5]

const Reslt = [...Arr];
// console.log(...Arr)
// console.log(Reslt)

const obj = { a: 30, b: 40 };
// console.log(...obj);


const person = {
    fullName: 'pervez alam',
    age: 37,
    color: 'dark'
};


// destructuring
const { colorr } = person; // const fullName = person.fullName
// console.log('person full name', fullName);
// console.log('person age ', age);
// console.log('person color ', colorr)


const personArray = ['pervez alam', 37, 'dark'];
// console.log('name in personArray', personArray[0]);

// destructuring
const [nameOfPerson, ageOfPerson, color] = personArray;
console.log('nameOfPerson is', nameOfPerson);
console.log('ageOfPerson is', ageOfPerson);
console.log('ageOfPerson is', color);