/**
return the number of brackets required to make an accurate bracket

(() => 1

(()) => 0

)())( => 3

set result = 0
set count = 0
if close bracket and C <=0, add to our result
else if '(', +1 to count, if ')' -1 count
add result to count

*/

function bracketMatch(text) {
  
  let result = 0;
  let count = 0;
  
  for (let b of text){  //text = )()
    if (count === 0 && b === ')') result ++ //result = 1
    else if(b === '(') count ++; //count +1
    else if (b ===')') count --; //count -1
  }
  
  return result + count; // 1 + 0;
}

//console.log(bracketMatch(')())('))