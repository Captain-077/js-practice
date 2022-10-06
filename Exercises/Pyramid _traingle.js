//000*
//00***
//0*****
//*******



// 
//   **
//   ***
//   ****

//000* 
//00***
//0*****
//*******


let OuterIndex = 0;

while (OuterIndex < 4) {
    let innerIndex = 3
    let str = ''

    //Zero shape

    while (OuterIndex < innerIndex) {
        str += '0';
        innerIndex--
    }

    //ulta triangle shape

    innerIndex = 0;
    while (innerIndex <= OuterIndex) {
        str += '*'
        innerIndex++
    }

    /////////////////////seedha triangle shape
    innerIndex = 0;

    while (innerIndex < OuterIndex) {
        if (OuterIndex == 0) {
            str += ' ';
            break;
        }

        str += '*'
        innerIndex++
    }

    console.log(str)
    OuterIndex++;

}