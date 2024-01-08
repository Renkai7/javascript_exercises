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
