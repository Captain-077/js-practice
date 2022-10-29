const arrayOne = [
    { name: 'pervez', age: 37 },
    { name: 'arif', age: 25 },
    { name: 'boby', age: 33 },
    { name: 'sunil', age: 30 },
    { name: 'nakul', age: 24 },
    { name: 'aakash', age: 26 },
];

function sortByAge(obj1, obj2) {
    if (obj1.age > obj2.age) {
        return 1;
    }

    if (obj1.age < obj2.age) {
        return -1;
    }

    return 0;

}


console.log('Array one before sorting')
console.log(arrayOne);

arrayOne.sort(sortByAge);
console.log('Array one after sorting');
console.log(arrayOne);