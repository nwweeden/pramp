/**
 * You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.
 * 
 */

function reverseWords(arr) {
  
  if (arr.length <= 1) return arr;
 
  let currentWord = [];
  let wordStack = [];
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === ' '){
      wordStack.push(currentWord);
      currentWord = [];
    }
    else currentWord.push(arr[i])
  }
  wordStack.push(currentWord);
  //console.log('wordstack', wordStack)
  
  let result = [];
  
  while (wordStack.length){
    let next = wordStack.pop();
    result = result.concat(next)
    result.push(' ');
  }
  //console.log('result', result)
  return result.slice(0,result.length - 1);
}