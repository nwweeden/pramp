/**
 * Given an unsorted array of integers arr and a number s, write a function findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum up to s. Your function should return an array of these numbers in an ascending order. If such a quadruplet doesn’t exist, return an empty array.

Note that there may be more than one quadruplet in arr whose sum is s. You’re asked to return the first one you encounter (considering the results are sorted).

Explain and code the most efficient solution possible, and analyze its time and space complexities.
 */

function findArrayQuadruplet(arr, s) {
  
  arr.sort();
  
  for (let i=0; i < arr.length - 3 ; i++){
    for (let y=i+1; y < arr.length - 2; y++){
      let left = y + 1;
      let right = arr.length - 1;
      
      while(left < right){      
        if (arr[i] + arr[y] + arr[left] + arr[right] === s){
          return [arr[i],arr[y],arr[left],arr[right]]
        }
        else if (arr[i] + arr[y] + arr[left] + arr[right] < s){
          left ++;
        } else{
          right --;
        }
      }
    }
  }
  return [];
}