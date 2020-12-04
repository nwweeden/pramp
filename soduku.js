// Write a function to verify whether a Sudoku puzzle is correct.
// Its possible for there to be a blank space.
// This function runs whenever a new value is added and checks to see if the value added is currently correct


/**
 * given 9x9 array of arrays, return true or false if valid
 * 
 * rules:
 *  - Unique Horizontal (each array cannot have duplicates)
 *  - Unique vertical (each array[i] cannot have duplicates)
 *  - unique box (array[i][0 - 2] - array[i - 2][0 - 2] cannot have duplicates)
*/


function validSoduku(arr){
	//check horizontal
	for (let row of arr){
		let check = new Array(10);
		for (let i = 0; i < row.length; i++){
			if(row[i] === '') continue;
			if (check[row[i]] !== undefined) return false;
			check[row[i]] = row[i];
		}
	}
	//check vertical
	for (let i = 0; i < arr.length; i++){
		let check = new Array(10);
		for (let row of arr){
			if (row[i] === '') continue;
			if (check[row[i]] !== undefined) return false;
			check[row[i]] = row[i];
		}
	}

	//check box
	let check = new Array(10)
	let iStart = 0;
	let yStart = 0;
	let moveRight = true;

	for (let i = iStart; i < arr.length; i++){
    console.log('check is', check)
		if (i === iStart + 3){
			check = new Array(9);
			moveRight ? yStart +=3 : iStart += 3;
			moveRight = !moveRight
			break;
		}
		for (let y = yStart; y < arr.length; y++){
			if (y === yStart + 3) break;
			if (arr[i][y] === '') continue;
			if (check[arr[i][y]] !== undefined) return false;
			check[arr[i][y]] = arr[i][y];
		}
	}

	return true;
} 

let test = [
  [1,2,3,7,8,9,'','',''],
  [4,5,6,1,2,3,'','',''],
  [7,8,9,4,5,6,'','',''],
  [8,'','','','','','','',''],
  [5,'','','','','','','',''],
  [6,'','','','','','','',''],
  [9,'','','','','',4,5,6],
  [2,'','','','','',7,8,9],
  ['','','','','','',1,2,3],
]
console.log(validSoduku(test))