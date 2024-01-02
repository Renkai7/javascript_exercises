/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
	owner: "Jonas Schmedtmann",
	movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
	interestRate: 1.2, // %
	pin: 1111,

	movementsDates: [
		"2019-11-18T21:31:17.178Z",
		"2019-12-23T07:42:02.383Z",
		"2020-01-28T09:15:04.904Z",
		"2020-04-01T10:17:24.185Z",
		"2020-05-08T14:11:59.604Z",
		"2020-05-27T17:01:17.194Z",
		"2020-07-11T23:36:17.929Z",
		"2020-07-12T10:51:36.790Z",
	],
	currency: "EUR",
	locale: "pt-PT", // de-DE
};

const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,

	movementsDates: [
		"2019-11-01T13:15:33.035Z",
		"2019-11-30T09:48:16.867Z",
		"2019-12-25T06:04:23.907Z",
		"2020-01-25T14:18:46.235Z",
		"2020-02-05T16:33:06.386Z",
		"2020-04-10T14:43:26.374Z",
		"2020-06-25T18:49:59.371Z",
		"2020-07-26T12:01:20.894Z",
	],
	currency: "USD",
	locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

///////////////////////////////////////
// Converting and Checking Numbers

// Conversion
console.log(Number("23"));
console.log(+"23");

// Parsing
console.log(Number.parseInt("30px", 10));

console.log(Number.parseFloat("2.5rem"));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN(+"20X"));

// Best way of checking if value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite(23 / 0));

// Check if value is integer
console.log(Number.isInteger(23));

///////////////////////////////////////
// Math and Rounding
console.log(Math.sqrt(25));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, "23", 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat("10px") ** 2);

const randomInt = (min, max) =>
	Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(23.3));
console.log("Math.round()");
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log("Math.ceil()");
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log("Math.floor()");
console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log(+(2.345).toFixed(2));

///////////////////////////////////////
// The Remainder Operator
console.log(5 % 2); // Output 1

console.log(8 % 3); // Output 2
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);

// Check for even number
const isEven = (n) => n % 2 === 0;
console.log(isEven(2));
console.log(isEven(23));

///////////////////////////////////////
// Numeric Separators

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

///////////////////////////////////////
// Working with BigInt
console.log(4838430248342043823408394839483204n);
console.log(BigInt(4838430248342043823408394839483204));

// Operations
console.log(10000n + 10000n);
console.log(36286372637263726376237263726372632n * 10000000n);
