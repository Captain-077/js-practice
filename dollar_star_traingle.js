while (outerIndex < 6) {
    let str = ''
    let innerIndex = 0
    while (innerIndex <= outerIndex) {
        if (innerIndex % 2 == 0 || innerIndex % 5 == 0) {
            str += '$ '
        } else {
            str += '* '
        }
        innerIndex += 1
    }
    console.log(str);
    outerIndex += 1
}