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
