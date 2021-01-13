/**
 * A Toeplitz matrix is a matrix where every left-to-right-descending diagonal has the same element. Given a non-empty matrix arr, write a function that returns true if and only if it is a Toeplitz matrix. The matrix can be any dimensions, not necessarily square.
 */

function isToeplitz(arr) {
	/**
	@param arr: integer[][]
	@return: boolean
	*/
  
  for (let i = 0; i < arr.length - 1; i++){
    for (let j = 0; j < arr[i].length - 1; j++){
     if (arr[i][j] !== arr[i+1][j+1]) return false;
    }
  }
  return true;
}
