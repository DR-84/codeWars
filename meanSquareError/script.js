solution = (firstArray, secondArray) => {
	// if firstArray(index) > than secondArray(index) first - second
	// if second > first, second - first
	// put differece in array
	// add all values in array.reduce / array.length
	let newArray = [];
	numOne = firstArray.map(num1 => num1);
	numTwo = secondArray.map(num2 => num2);
	newArray = numOne > numTwo ? numOne - numTwo : numTwo - numOne;
	let solution = newArray;
	return solution.reduce((a, b) => a + b, 0) / newArray.length;
};
console.log(solution([1, 2, 3], [4, 5, 6]));
