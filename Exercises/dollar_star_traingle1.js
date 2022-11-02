let outerIndex = 0;
while (outerIndex < 6) {
    let str = ''
    let innerIndex = 0
    while (innerIndex <= outerIndex) {

        if (outerIndex == 0) {
            str = '$ '
            break;
        }

        if (innerIndex % 3 == 2) {
            str += '$ '
        } else {
            str += '* '
        }
        innerIndex += 1
    }
    console.log(str);
    outerIndex += 1
}

// $ 
// * * 
// * * $ 
// * * $ * 
// * * $ * * 
// * * $ * * $