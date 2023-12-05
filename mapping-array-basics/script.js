const numArray = [5, 2, 8, 5, 9, 3, 6, 2, 1, 4];

// Double the numbers of Array elements
const doubleArray = numArray.map((num) => {
	return num * 2;
});

console.log("Double numbers: ", doubleArray);

// Square the numbers of Array elements
const squareArray = numArray.map((num) => {
	return num * num;
});

console.log("Square numbers: ", squareArray);
