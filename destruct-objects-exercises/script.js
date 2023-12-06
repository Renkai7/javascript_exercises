// Basic Destructuring
const person = {
	name: "Alice",
	age: 25,
	profession: "Developer",
};

const { name, age } = person;
console.log(name, age); // Output: Alice 25

// Destructuring with Different Variable Names
const book = {
	title: "JavaScript Essentials",
	author: "Jane Doe",
	year: 2021,
};

const { title: bookTitle, author: bookAuthor } = book;
console.log(bookTitle, bookAuthor); // Output: JavaScript Essentials Jane Doe

// Nested Object Destructuring
const user = {
	id: 1,
	name: "John",
	details: {
		email: "john@example.com",
		address: "123 Main St",
	},
};

const { email, address } = user.details;
console.log(email, address); // Output: john@example.com 123 Main St

// Destructuring with Default Values
const gadget = {
	name: "Smartphone",
	price: 299,
};

const { name: gadgetName, stock = 10 } = gadget;
console.log(gadgetName, stock); // Output: Smartphone 10

// Function Parameter Destructuring
const rectangle = {
	width: 20,
	height: 10,
};

const calculateArea = ({ width, height }) => {
	return width * height;
};

console.log(calculateArea(rectangle)); // Output: 200

// Destructuring in Loops
const users = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
	{ id: 3, name: "Charlie" },
];

for (const { name } of users) {
	console.log(name);
} // Output: Alice, Bob, Charlie

// Rest Operator with Destructuring
const vehicle = {
	brand: "Toyota",
	model: "Corolla",
	year: 2020,
	color: "blue",
	fuelType: "petrol",
};

const { brand, model, ...moreCareInfo } = vehicle;
console.log(brand, model, moreCareInfo); // Output: Toyota Corolla Object { year: 2020, color: "blue", fuelType: "petrol" }

// DestructuringFunction Return Values
function getUser() {
	return {
		id: 1,
		username: "johndoe",
		email: "john@example.com",
	};
}

const { username, email: userEmail } = getUser();
console.log(username, userEmail); // Output: johndoe john@example.com

// Destructuring Array Contained in an Object
const classroom = {
	teacher: "Mrs. Smith",
	students: ["John", "Jane", "Joe", "Jill"],
};

const {
	students: [firstStudent, secondStudent],
} = classroom;

console.log(firstStudent, secondStudent); // Output: John Jane

// Skipping Elements in Array Destructuring
const fibNumbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
const [, , , , fifthNumber] = fibNumbers;
console.log(fifthNumber); // Output: 3
