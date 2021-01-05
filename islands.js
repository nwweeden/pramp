/**
 - return count of islands
 - islands are groups of 1s horizontal or vertical, NOT diagnol
 
 binaryMatrix = [ [0,    1,    0,    1,    0],
                  [0,    0,    1,    1,    1],
                  [1,    0,    0,    1,    0],
                  [0,    1,    1,    0,    0],
                  [1,    0,    1,    0,    1] ]
                  
 matrix = [[1,0],
           [1,0]
           [0,1]] => 2
           
 matrixCopy = [[,]
               [f,]
               [,]]
*/

function getNumberOfIslands(binaryMatrix) {
  
  if (binaryMatrix.length === 0 || binaryMatrix[0].length === 0) return 0;
  
  let count = 0;
  
  function _helper(row, column){
    if (row < 0 || row >= binaryMatrix.length) return;
    if(binaryMatrix[row][column] !== 1){
      return;
    }
        
    binaryMatrix[row][column] = true;
    
    _helper(row+1, column);
    _helper(row-1, column);
    _helper(row, column+1);
    _helper(row, column-1);
    
  }
  
  for(let i = 0; i < binaryMatrix.length; i++){
    for (let j = 0; j < binaryMatrix[0].length; j++){
      
      if (binaryMatrix[i][j] === 1){
        count ++;
        _helper(i, j)
      }
    }
  }
  
  return count;
  
}

