


function extractValByTen(arr){
    
    let output = [];
    let output2 = [];
    let len = arr.length;
    let Index = 0;
    
    while(Index<len){
        
        let incresedVal = increaseByTen(arr[Index]);
 
 if(incresedVal == true) {
          output.push(incresedVal);
    }
    
    else if(incresedVal == false){
        output2.push(incresedVal);
    }
        Index++;
        
    }
    return output + output2
    
}

    
    function increaseByTen(val){
  if (val % 2 == 0 )
    {
       return val * 0.10 + val 
    }
    
    else{
        return false
    }
    return val
    

}
    
    
    const result =  extractValByTen([2, 43, 50, 60,71])
    console.log(result)