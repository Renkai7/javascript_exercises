const numArray = [5, 2, 8, 5, 9, 3, 6, 2, 1, 4];
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const names = [
	"Alice",
	"Bob",
	"Charlie",
	"David",
	"Eve",
	"Frank",
	"Grace",
	"Helen",
	"Isaac",
	"Jack",
];

console.log("Original letter array: ", letters);
console.log("Original number array: ", numArray);
console.log("Original name array: ", names);

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

// Filter for even numbers
const evenNumber = numArray.filter((num) => {
	return num % 2 === 0;
});

console.log("Even numbers: ", evenNumber);

// Filter for names starting with 'A'
const namesStartingWithLetterA = names.filter((name) => {
	return name.startsWith("A");
});

console.log("Names start with 'A': ", namesStartingWithLetterA);

// Calculate length of string
const lengthOfString = names.map((name) => {
	return `${name}: ${name.length}`;
});

console.log("Length of string: ", lengthOfString);

// Reverse string
const reverseString = names.map((name) => {
	let reversedWord = "";
	for (let i = name.length - 1; i >= 0; i--) {
		reversedWord += name[i];
	}
	return reversedWord;
});

console.log("Reverse string: ", reverseString);
