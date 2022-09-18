console.log('---------------------slice-------------------------------')

// slice - ****do not modify actual array
// extract middle array 6, 4
// const sliceArray = [7, 3, 6, 4, 2, 10];
// const slicedArray = sliceArray.slice(2, 4);
// console.log('actual array', sliceArray);
// console.log('sliced array', slicedArray);

// //TODO: extract first 3 element
// const slicedArray2 = sliceArray.slice(0, 3);
// console.log('actual array', sliceArray);
// console.log('sliced array 2', slicedArray2);





console.log('-------------------splice--------------------')
    // splice - *********modify actual array
    // splice(startIndex, deleteCount, ...array)
const spliceArray = [1, 2, 5, 7, 8, 10, 12, 24];


// remove last two elements
console.log('------------- remove last two element --------------------');
console.log('length is', spliceArray.length);
const startIndex = spliceArray.length - 2;
console.log('start index ', startIndex)
const removedElements = spliceArray.splice(startIndex)
console.log('removed elements ', removedElements);
console.log('actual array ', spliceArray)

//TODO: remove two element from the middle
console.log('------------- remove two element from middle --------------------');
const startIndex2 = spliceArray.length / 2;
// const MiddleIndex = startIndex2 - 1;
console.log('middle two elements', startIndex2);
const removedElements2 = spliceArray.splice(startIndex2);
console.log('removed elements', removedElements2);