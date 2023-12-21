"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// Slice method
// Does not mutate array
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice);

// Splice method
// mutates array
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

// Reverse method
// mutates array
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// Concat method
// Does not mutate array
const letters = arr.concat(arr2);
console.log(letters);

// Join method
console.log(letters.join(" - "));

// At method
const newAtArr = [23, 11, 64];
console.log(newAtArr[0]);
console.log(newAtArr.at(0));

console.log(newAtArr[newAtArr.length - 1]); // 64
console.log(newAtArr.slice(-1)[0]); // 64
console.log(newAtArr.at(-1)); // 64

console.log("Tsukino".at(0));

// Looping Arrays
// forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
	if (movement > 0) {
		console.log(`Movement ${i + 1}: You deposited ${movement}`);
	} else {
		console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
	}
}

// forEach cannot break out of the loop and has to complete entire loop
console.log("---- FOREACH ----");
movements.forEach(function (mov, i, arr) {
	if (mov > 0) {
		console.log(`Movement ${i + 1}: You deposited ${mov}`);
	} else {
		console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
	}
	console.log(arr[i]);
});

// forEach with Maps and Sets
const currencies = new Map([
	["USD", "United States dollar"],
	["EUR", "Euro"],
	["GBP", "Pound sterling"],
]);

// Map
currencies.forEach(function (value, key, map) {
	console.log(`${key}: ${value}`);
	console.log(map);
});

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _value, map) {
	console.log(`${_value}: ${value}`);
});
