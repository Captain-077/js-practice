let outerIndex = 4;

while (outerIndex < 5) {
    let str = '';
    let innerIndex = 0;
    while (innerIndex <= outerIndex) {
        str += '* '
        innerIndex += 1;
    }
    console.log(str);
    outerIndex -= 1;
}