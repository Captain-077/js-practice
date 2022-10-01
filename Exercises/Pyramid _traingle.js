let outerIndex = 4;
let outerIndex2 = 0;


while (outerIndex2 < 6) {
    let str2 = ''
    let innerIndex2 = 0
    while (innerIndex2 <= outerIndex2) {
        str2 += '* '
        innerIndex2 += 1
    }
    console.log(str2);
    outerIndex2 += 1

}

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