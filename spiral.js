/**
 * 
 * Matrix Spiral Copy
Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix’s values into a 1D array in a spiral order, clockwise. Your function then should return that array. Analyze the time and space complexities of your solution.
 */

 /**

[[1,2,3],
 [3,4,5]
 [6,7,8]] => [1, 2, 3, 5, 8, 7, 6, 3, 4]
 
  - keep track of each starting point
    - 1 variable to keep track of start at each point?
    - R
    - D
    - L
    - U
    
  - right: iterate front to back at R array
  - down: iterate across all arrays at D length
  - Left: iterate back to front at L array
  - Up: iterate back across all arrays at U length

*/

function spiralCopy(inputMatrix) {
  
  let l = 0;
  let r = inputMatrix[0].length - 1;
  
  let t = 0;
  let b = inputMatrix.length - 1;
  
  let output = [];
  
  
  
  //create a loop
  while(l <= r && t <= b){
    //console.log('L:', l, 'R:', r, 'T:', t, 'B:', b)
    for (let i = l; i <= r; i++){
      //console.log('added left to right')
      output.push(inputMatrix[t][i]) // need to add i
    }
    t++;
    
    for (let i = t; i <= b; i++){
      //console.log('added top to bottom')
      output.push(inputMatrix[i][r])
    }
    r--;
    
    if (t <= b){
      for (let i = r; i >= l; i--){
        //console.log('added right to left')
        output.push(inputMatrix[b][i]) // need to add i
      }
      b--
    }
    
    if (l <= r){
      for (let i = b; i >= t; i--){
        //console.log('added bottom to top')
        output.push(inputMatrix[i][l])
      }
      l++
    }
  }
  
  return output;
}

