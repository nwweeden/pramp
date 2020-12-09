/**
 * Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

Come up with an asymptotically optimal solution and analyze the time and space complexities.

Example:

input:  arr = ['x','y','z'], str = "xyyzyzyx"

output: "zyx"

 */

function getShortestUniqueSubstring(arr, str) {
  // your code goes here
  let result = '';
  let uniqueCounter = 0;
  let headIndex = 0;
  
  let countObj = {};
  
  for (let ltr of arr){
    countObj[ltr] = 0;
  }
  
  //console.log(countObj);
  //console.log(arr, str)
  for (let tailIndex = 0; tailIndex < str.length; tailIndex++){
    let tailChar = str[tailIndex];
    if (countObj[tailChar] === undefined) continue;
    
    if (countObj[tailChar] === 0){
      uniqueCounter ++ 
    }
    
    countObj[tailChar] = countObj[tailChar] + 1;
    
    //console.log('entering while with', countObj)
    
    while(uniqueCounter === arr.length){
      console.log('result is', result)
      //console.log('head index is', headIndex, 'tailIndex is', tailIndex)
      
      let tempLength = tailIndex - headIndex + 1;
      //console.log('templength', tempLength)
      if(tempLength === arr.length){
        console.log('executed here')
        return str.slice(headIndex, tailIndex + 1);
      }
      if (result === "" || tempLength < result.length){
        result = str.slice(headIndex, tailIndex + 1);
        //console.log('resetting result', result)
      }
      let headChar = str[headIndex];
      //console.log('headChar is', headChar, 'and in the obj is', countObj[headChar])
      if (countObj[headChar] !== undefined){
        let headCount = countObj[headChar] - 1;
        //console.log('headCount is', headCount)
        if (headCount === 0){
          uniqueCounter --;
        }
        countObj[headChar] = headCount;
      }
      headIndex ++;
    }
  }

  return result;
}