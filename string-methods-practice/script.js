"use strict";
// String Length and Access practice

// Exercise 1: String Length
const showStringLength = function (str) {
	return str.length;
};
console.log(showStringLength("Hello World"));

// Exercise 2: Character at Index
const stringAtIndex = function (str, i) {
	const character = str.charAt(i);
	return `Character at index ${i} is ${character}`;
};
console.log(stringAtIndex("Naruto", 4));

// Exercise 3: Unicode Value of Character
const characterUnicode = function (str, i) {
	const unicode = str.charCodeAt(i);
	return `Unicode value at index ${i}: ${unicode}`;
};
console.log(characterUnicode("Believe it!", 0));

// Exercise 4: Substring Extraction
const subStringExtraction = function (str, start, end) {
	const characterSubtring = str.substring(start, end);
	return `Substring from ${start} to ${end}: ${characterSubtring}`;
};
console.log(subStringExtraction("Believe it!", 2, 6));

// Exercise 5: Slice a String
const sliceAString = function (str, start, end) {
	const characterSliced = str.slice(start, end);
	return `Sliced from ${start} to ${end}: ${characterSliced}`;
};
console.log(sliceAString("Believe it!", 3, 7));

// Exercise 6: Substring with `substr()`
const altSubString = function (str, start, end) {
	const characterSubStr = str.substr(start, end);
	return `Substring using substr() from ${start} to ${end}: ${characterSubStr}`;
};
console.log(altSubString("Believe it!", 2, 6));

// Exercise 7: Splitting a String
const splitAString = function (str, splitPoint) {
	if (splitPoint === " " && str.indexOf(" ") === -1) {
		return `${str} does not have a space to be split from.`;
	}
	const strSplit = str.split(splitPoint);
	return `Splitting string: ${strSplit}`;
};
console.log(splitAString("Hi", " "));
console.log(splitAString("Believe it!", " "));

// Exercise 8: Combining Methods
const sliceAndSplitString = function (str, start, end) {
	const strSlice = str.slice(start, end);
	const splitStr = strSlice.split("");

	return `Sliced and split string: ${splitStr}`;
};
console.log(sliceAndSplitString("Believe it!", 0, 5));

// Exercise 9: Custom Separator in Split
const splitBySeparator = function (str, splitPoint) {
	const newSplit = str.split(splitPoint);
	return newSplit;
};
console.log(splitBySeparator("apple,orange,banana,grape", ","));

// Exercise 10: Advanced String Manipulation
const upperCaseWord = function (str, start, end) {
	const before = str.substring(0, start);
	const strSubstring = str.substring(start, end).toUpperCase();
	const after = str.substring(end);

	return before + strSubstring + after;
};

console.log(upperCaseWord("JavaScript is fun", 5, 10));
