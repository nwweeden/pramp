/**
 * Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.

Solve without using division and analyze your solution’s time and space complexities.

Examples:

input:  arr = [8, 10, 2]
output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

input:  arr = [2, 7, 3, 4]
output: [84, 24, 56, 42] # by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]
Constraints:

[time limit] 5000ms

[input] array.integer arr

0 ≤ arr.length ≤ 20
[output] array.integer
 * 
 */

//Brute force method
function arrayOfArrayProducts(arr) {
  let result = [];
  if(arr.length === 1 || arr.length === 0) return result;
  
  for (let i=0; i < arr.length; i++){
    let current = 1;
    for (let y=0; y < arr.length; y++){
      if (i === y) continue;
      current = arr[y] * current;
    }
    result.push(current);
  }
  return result;
}

//Optimized solution
function arrayOfArrayProducts(arr){
  if (arr.length === 0 || arr.length === 1) return [];
  let result = [];
  let product = 1;
  for (let i = 0; i < arr.length; i++){
    result[i] = product;
    product *= arr[i];
  }
  
  product = 1;
  
  for (let y=arr.length -1; y >=0; y--){
    result[y] *= product;
    product *= arr[y];
  }
  
  return result;
}