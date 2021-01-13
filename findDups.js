/*
 - sorted arrays
 - find all dups
 - return in ascending order
 
 Two Cases:
  - lengths are similar
  - second array is much larger
  
  N
  M = N^C
  M + N^C
  
  log(N^C) = ClogN
  O(N*ClogN)
  
  O(N + M) = O(N + N^C) = O(N^C)  
  TC: o(n) + o(m)
   - store arr1 values in a set
   - iterate through arr2 and if value is in set, send to results;
   
   - iterate through arr1
   - binary search of arr2
   - found then store
*/

function findDuplicates(arr1, arr2) {
  
  let result = [];
  
  for (let num of arr1){
    if (binarySearch(num, arr2)) result.push(num);
  }
  
  return result;
}


function binarySearch(num, arr2){
  
  let left = 0;
  let right = arr2.length - 1;
  
  while (left <= right){
    let mid = Math.floor((left+right) / 2);
    
    if (arr2[mid] === num){
      return true;
    }
    if (arr2[mid] < num){
      left = mid + 1;
    } else{
      right = mid - 1;
    }
  }
  return false;
}




 