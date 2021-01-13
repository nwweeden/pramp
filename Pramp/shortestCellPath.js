/**
 * In a given grid of 0s and 1s, we have some starting row and column sr, sc and a target row and column tr, tc. Return the length of the shortest path from sr, sc to tr, tc that walks along 1 values only.

Each location in the path, including the start and the end, must be a 1. Each subsequent location in the path must be 4-directionally adjacent to the previous location.

It is guaranteed that grid[sr][sc] = grid[tr][tc] = 1, and the starting and target positions are different.

If the task is impossible, return -1.

[[1*, 1, 1, 1],
 [0, 0, 0, 1],
 [1*, 1, 1, 1]] => 8 
 
 if no route, => -1
 
 [[1,1]] => 1
 
 [[1,1],
  [0,1]] => 2
  
 [[*1,1,^1],
  [1,0,1],
  [1,1,1]] => 2
  
 [[*2, 1,^1],
  [ 5, 0, 1],
  [ 4, 3, 2]]
  
  
      1
     / \
    1   0
   / \
  1   0
  grid[nr][nc]
  
  starting point at queue
  shift off queue
  if that value is 0, then break
  if point is ending point return depth
  if value is 1 and not end point putting local points back in

  
 * 
 */

function shortestCellPath(grid, sr, sc, tr, tc) {
  
  let queue = [[sr,sc,0]];
  let counter = 0;
  let seen = new Set();
  
  while (queue.length){
    console.log(queue);
    let currentPoint = queue.shift();
    
    let row = currentPoint[0];
    let column = currentPoint[1];
    
    seen.add(`${row}${column}`);
    //console.log('seen is', seen)
    
    if (grid[row][column] === 0) continue;
    if (row === tr && column === tc) return currentPoint[2];
    
    if (grid[row][column+1] &&
        grid[row][column+1] !== 0 &&
       !seen.has(`${row}${column+1}`)) queue.push([row, column+1, counter + 1])
    if (grid[row][column-1] &&
        grid[row][column-1] !== 0 &&
       !seen.has(`${row}${column-1}`)) queue.push([row, column-1, counter + 1])
    if (grid[row+1] &&
        grid[row+1][column] !== 0 &&
       !seen.has(`${row+1}${column}`)) queue.push([row+1, column, counter + 1])
    if (grid[row-1] &&
        grid[row-1][column] !== 0 &&
       !seen.has(`${row-1}${column}`)) queue.push([row-1, column, counter + 1])
    
    counter ++;
  }
  
  return -1
}