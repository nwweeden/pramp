/**
 * The deletion distance of two strings is the minimum number of characters you need to delete in the two strings in order to get the same string. For instance, the deletion distance between "heat" and "hit" is 3:

By deleting 'e' and 'a' in "heat", and 'i' in "hit", we get the string "ht" in both cases.
We cannot get the same string from both strings by deleting 2 letters or fewer.
Given the strings str1 and str2, write an efficient function deletionDistance that returns the deletion distance between them. Explain how your function works, and analyze its time and space complexities.
 */

function deletionDistance(str1, str2){
  let memo = new Array(str1.length + 1);
  
  for (let i = 0; i < memo.length; i++){
    memo[i] = new Array(str2.length + 1);
  }
  
  for (let i = 0; i < memo.length; i++){
    for (let j=0; j < memo[0].length; j++){
      if (i === 0) memo[i][j] = j;
      else if (j === 0) memo[i][j] = i;
      else if (str1[i-1] === str2[j-1]) memo[i][j] = memo[i-1][j-1];
      else memo[i][j] = Math.min(memo[i-1][j], memo[i][j-1]) + 1;
    }
  }
  console.log(memo);
  return memo[str1.length][str2.length];