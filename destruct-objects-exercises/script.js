// Basic Destructuring
const person = {
	name: "Alice",
	age: 25,
	profession: "Developer",
};

const { name, age } = person;
console.log(name, age);

// Destructuring with Different Variable Names
const book = {
	title: "JavaScript Essentials",
	author: "Jane Doe",
	year: 2021,
};

const { title: bookTitle, author: bookAuthor } = book;
console.log(bookTitle, bookAuthor);
