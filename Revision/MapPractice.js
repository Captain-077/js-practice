


function extractValByTen(arr){
    
    let output = [];
    let len = arr.length;
    let Index = 0;
    
    while(Index<len){
        
        let incresedVal = increaseByTen(arr[Index])

          output.push(incresedVal)
        Index++;
    }
    return output
    
}

    
    function increaseByTen(val){
 
      return val * 0.10 + val 
}
    
    
    const result =  extractValByTen([2, 43, 50, 60,71])
    console.log(result)
    
    
    // Map function 
    
//     const arr = [2, 43, 50, 60,71]
    
//     let result = arr.map(increaseByTen);
//     console.log(result)
    
//         function increaseByTen(val){
//       return val * 0.10 + val 
// }


    
    
