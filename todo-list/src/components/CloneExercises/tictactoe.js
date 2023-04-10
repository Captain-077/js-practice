const ticTacToe = [
    [0,0,0], 
    [0,0,0], 
    [0,0,0]
  ];
  
  /*
  [
    [0,0,0], 
    [0,1,0], 
    [0,0,0]
  ];
  */
  
  
  const updatedTicTacToe = [...ticTacToe];
  
  updatedTicTacToe [1] = [...updatedTicTacToe [1]];
  
  updatedTicTacToe [1][1] = 1;
  
  console.log(ticTacToe);
  console.log(updatedTicTacToe);
  
  
  console.log(updatedTicTacToe[0] === ticTacToe[0], 'should be true')
  console.log(updatedTicTacToe[2] === ticTacToe[2], 'should be true');
  
  console.log(updatedTicTacToe[1][1] != ticTacToe[1][1], 'should be true');
  console.log(updatedTicTacToe[1] != ticTacToe[1], 'should be true');
  
  console.log(updatedTicTacToe[1][0] === ticTacToe[1][0], 'should be true');