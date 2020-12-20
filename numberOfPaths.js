/**
 * The simplest way to create this function is to write a recursive function, that calculates the possible paths to each square on the grid, using the squares already calculated. Our output is the paths from (0,0) to (n-1,n-1). Notice the following recursive relation: for every path from (0,0) to (i,j), either: The last step is N, in which case it is generated by a legitimate path to (i,j-1), and then one step north. The last step is E, in which case it is generated by a legitimate path to (i-1,j), and then one step east. For example, take all paths to (4,3). The paths that end with an N, such as “EEENN”, induce paths to (4,2) by removing the last N (“EEEN”). On the other hand, the paths that end with an E, such as “ENENE”, induce paths to (3,3) by removing the last E (“ENEN”).

This indicates the number of ways to square (i,j) is equal to the number of ways to square (i-1,j) plus the number of ways to (i,j-1). We build the function that uses this recursive relation, to calculate the number of paths. Notice that the function may call the same square multiple times, so we use the memoization technique to reduce the number of calls significantly:
 */

function numOfPathsToDest(n) {  
  //create a memo lookup
  
  let memo = new Array(n);
  for (let i = 0; i < memo.length; i++){
    memo[i] = new Array(n);
  }
  //console.log(memo);
  
  function _numOfPathsToDest(i, j){
    if (i < 0 || j < 0){
      return 0;
    }
    if (i < j){
      memo[i][j] = 0;
    }
    
    else if(memo[i][j] !== undefined) return memo[i][j];
    
    else if (i === 0 && j === 0) memo[i][j] = 1;
    
    else memo[i][j] = _numOfPathsToDest(i, j-1) + _numOfPathsToDest(i-1, j)
    
    return memo[i][j]
    
  }
  
  return _numOfPathsToDest(n-1,n-1)
  
}