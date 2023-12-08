// Basic Rest Parameters
const sum = (...numbers) => {
	let total = 0;
	for (let i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
};

console.log(sum(1, 2, 3));

// Combining Rest Parameters with Regular Parameters
const greet = (firstName, lastName, ...titles) => {
	return `${firstName} ${lastName} ${titles}`;
};

console.log(greet("Ren", "Tsukino", "Phantom Thief", "Student", "Brewer"));

// Destructuring an Array
const fruits = ["Apple", "Banana", "Cherry", "Dates"];
const [apple, banana, ...otherFruits] = fruits;
console.log(apple, banana, otherFruits);

// Destructure an Object
const person = { name: "Alice", age: 30, job: "Developer" };
const { name, age, ...otherInfo } = person;
console.log(name, age, otherInfo);

// Swapping Variables using Destructuring
let a = 2;
let b = 4;
[b, a] = [a, b];
console.log(a, b);

// Function with Destructured Object Parameters
const playerInfo = ({ name, age }) => {
	return `${name} ${age}`;
};
console.log(playerInfo(person));

// Nested Destructuring
const user = {
	id: 1,
	name: "John",
	address: { city: "New York", country: "USA" },
};
const {
	address: { city, country },
} = user;
console.log(city, country);

// Rest Parameters in Array Methods
const combineArray = (...arr) => {
	return [arr];
};
console.log(combineArray(1, 2, 3, 4));

// Default Values with Destructuring
const scores = [10, 20];
const [numOne = scores[0], numTwo = scores[1], numThree = 3] = scores;

// Complex Destructuring
const student = { name: "Emily", age: 22, scores: { maths: 74, english: 63 } };
const getStudentNameAndGrade = ({ name, scores }) => {
	return `${name} ${scores.maths}`;
};
console.log(getStudentNameAndGrade(student));
