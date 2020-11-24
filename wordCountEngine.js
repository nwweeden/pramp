/**
 * Implement a document scanning function wordCountEngine, which receives a string document and returns a list of all unique words in it and their number of occurrences, sorted by the number of occurrences in a descending order. If two or more words have the same count, they should be sorted according to their order in the original sentence. Assume that all letters are in english alphabet. You function should be case-insensitive, so for instance, the words “Perfect” and “perfect” should be considered the same word.

The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate words.

Analyze the time and space complexities of your solution. Try to optimize for time while keeping a polynomial space complexity.
 * 
 */


function wordCountEngine(document) {
  let arrayWords = document.split(' ');
  let wordCounter = {};
  let largestCount = 0;
  
  for (let i = 0; i < arrayWords.length; i++){
    let word = arrayWords[i].toLowerCase();
    let cleanWord = '';
    for (let char of word){
      if (char >= 'a' && char <= 'z'){
        cleanWord += char;
      }
    }
      if (cleanWord.length < 1) continue;

      if (wordCounter[cleanWord]) wordCounter[cleanWord] ++;
      else wordCounter[cleanWord] = 1;
      largestCount = Math.max(wordCounter[cleanWord], largestCount)
  }
  
  let counterList = new Array(largestCount+1)
  
  for (let i = 0; i <= largestCount; i++){
    counterList[i] = null;
  }
  
  for (let word in wordCounter){
    let count = wordCounter[word];
    let wordCountList = counterList[count]
    
    if (wordCountList === null) wordCountList = [];
    wordCountList.push(word);
    
    counterList[count] = wordCountList;
  }
  
  let result = [];
  
  for (let i = counterList.length - 1; i > 0; i--){
    let wordCountList = counterList[i];
    if (wordCountList === null) continue;
    
    let strigifiedOccurance = i.toString();
    for (let word of wordCountList){
      result.push([word, strigifiedOccurance])
    }
  }
  //console.log(result);
  return result;
}