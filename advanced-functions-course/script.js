"use strict";

///////////////////////////////////////
// Default Parameters
console.log("Default Parameters");
const bookings = [];

const createBooking = (flightNum, numPassengers = 1, price = 199) => {
	// numPassengers = numPassengers || 1;
	// price = price || 199;
	const booking = {
		flightNum,
		numPassengers,
		price,
	};
	console.log(booking);
	bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);

////////////////////////////////////////////
// Passing Arguments: Values vs. Reference
console.log("Passing Arguments: Values vs. Reference");
const flight = "LH234";
const jonas = {
	name: "Ren Tsukino",
	passport: 234294912,
};

const checkIn = function (flightNum, passenger) {
	flightNum = "LH999";
	passenger.name = "Mr. " + passenger.name;

	if (passenger.passport === 234294912) {
		console.log("Check in");
	} else {
		console.log("Wrong passport!");
	}
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

///////////////////////////////////////
// Functions Accepting Callback Functions
const oneWord = (str) => {
	return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
	const [first, ...others] = str.split(" ");
	return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = (str, fn) => {
	console.log(`Original string: ${str}`);
	console.log(`Transformed string: ${fn(str)}`);

	console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

///////////////////////////////////////
// Functions Returning Functions
const greet = function (greeting) {
	return function (name) {
		console.log(`${greeting} ${name}`);
	};
};

const greeterHey = greet("Hey");
greeterHey("Ren");

greet("Hello")("Naoto");

// Challenge
const greet1 = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet1("Hey")("Makoto");

///////////////////////////////////////
// The call and apply Methods

const lufthansa = {
	airline: "Lufthansa",
	iataCode: "LH",
	bookings: [],
	book(flightNum, name) {
		console.log(
			`${name} booked a sear on ${this.airline} flight ${this.iataCode}${flightNum}`
		);
		this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
	},
};

lufthansa.book(777, "Ren");
lufthansa.book(767, "Naoto");
console.log(lufthansa);

const eurowings = {
	airline: "Eurowings",
	iataCode: "EW",
	bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, "Makoto");

// Call method
book.call(eurowings, 23, "Makoto");
console.log(eurowings);

const swiss = {
	airline: "Swiss Air Lines",
	iataCode: "LX",
	bookings: [],
};

book.call(swiss, 583, "Mitsuru");

// Apply method
const flightData = [583, "Naoto Shirogane"];
book.apply(swiss, flightData);

// Better method between Apply and Call
book.call(swiss, ...flightData);
console.log(swiss);

// Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Ren Tsukino");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Chie");
bookEW23("Haru");

console.log(eurowings);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
	console.log(this);

	this.planes++;
	console.log(this.planes);
};

document
	.querySelector(".buy")
	.addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = function (rate) {
	return function (value) {
		return value + value * rate;
	};
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
console.log("Coding Challenge #1");

const poll = {
	question: "What is your favourite programming language?",
	options: ["0. JavaScript", "1. Python", "2. Rust", "3. C++"],
	answers: new Array(4).fill(0),
	registerNewAnswer() {
		const answer = Number(
			prompt(
				`${this.question}\n${this.options.join("\n")}\n(Write option number)`
			)
		);
		console.log(answer);

		// Register answer
		typeof answer === "number" &&
			answer < this.answers.length &&
			this.answers[answer]++;

		this.displayResults();
		this.displayResults("string");
	},
	displayResults(type = "array") {
		if (type === "array") {
			console.log(this.answers);
		} else if (type === "string") {
			console.log(`Poll results are ${this.answers.join(", ")}`);
		}
	},
};

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");

document
	.querySelector(".poll")
	.addEventListener("click", poll.registerNewAnswer.bind(poll));

///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
console.log("IIFE Section");
const runOnce = function () {
	console.log("This will never run again");
};
runOnce();

// IIFE
(function () {
	console.log("This will never run again");
})();

(() => console.log("This will ALSO never run again"))();

const secureBooking = function () {
	let passengerCount = 0;

	return function () {
		passengerCount++;
		console.log(`${passengerCount} passengers`);
	};
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// Example 2
const boardPassengers = function (n, wait) {
	const perGroup = n / 3;

	setTimeout(function () {
		console.log(`We are now boarding all ${n} passengers`);
		console.log(`There are 3 groups, each with ${perGroup} passengers`);
	}, wait * 1000);

	console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
	const header = document.querySelector("h1");
	header.style.color = "red";

	document.querySelector("body").addEventListener("click", function () {
		header.style.color = "blue";
	});
})();
