const list = ["male", "Female", "Female", "male"]

function femaleList(value) {

    if (value == "Female") {

        return true;
    }

    return false;

}

function maleList(value) {

    if (value == "male") {

        return true;
    }

    return false;

}


function pollyfillfilter(array, callback) {

    const newarray = []
    const len = array.length;
    let index = 0;

    while (index < len) {
        const value = array[index]
        const changedList = callback(value)
        if (changedList == true) {
            newarray.push(value);
        }
        index++;

    }

    return newarray;
}


const Result = pollyfillfilter(list, femaleList);
const Result2 = pollyfillfilter(list, maleList);

console.log(Result);
console.log(Result2);