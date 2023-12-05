const numArray = [5, 2, 8, 5, 9, 3, 6, 2, 1, 4];
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

console.log("Original letter array: ", letters);
console.log("Original number array: ", numArray);
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

// Add 10 to each element
const add10ToArray = numArray.map((num) => {
	return num + 10;
});

console.log("Add 10 to numbers: ", add10ToArray);

// Convert to Uppercase
const uppercaseLetters = letters.map((letter) => {
	return letter.toUpperCase();
});

console.log("Uppercase letters: ", uppercaseLetters);
