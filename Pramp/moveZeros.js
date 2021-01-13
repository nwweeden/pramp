function moveZerosToEnd(arr) {

	// your code goes here
  let write = 0;
  for (let num = 0; num < arr.length; num++){
    if (arr[num] !== 0){
      arr[write] = arr[num]
      write += 1;
    }
  }
  for (let num = write; num < arr.length; num++){
    arr[num] = 0;
  }
  return arr
}