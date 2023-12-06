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
