/**
 * Given an array of integers arr:

Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
Write a function pancakeSort(arr) that sorts and returns the input array. You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.
 */


function pancakeSort(arr) {
  let max = arr.length
  for (let num = 0; num < arr.length; num ++){
    let largestIndex = 0;
    for (let i = 1; i < max; i++){
      if (arr[i] > arr[largestIndex]) largestIndex = i
    }
    flip(arr, largestIndex + 1)
    flip(arr, max);
    max --
  }
  return arr
}

function flip(arr, k){
  let left = 0;
  let right = k - 1;
  while (left < right){
    [arr[left],arr[right]] = [arr[right],arr[left]]
    left ++;
    right --;
  }
  return arr;
}

let test = [9,2,1,3,4,4,5,6,7,8,1]
console.log(pancakeSort(test)) //[2,1,3,4]