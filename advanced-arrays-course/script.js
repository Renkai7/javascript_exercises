"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
const account1 = {
	owner: "Jonas Schmedtmann",
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};

const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};

const account3 = {
	owner: "Steven Thomas Williams",
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};

const account4 = {
	owner: "Sarah Smith",
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
console.log("Coding Challenge #1");
const checkDogs = (dogsJulia, dogsKate) => {
	const copyOfJuliaDogs = [...dogsJulia];
	copyOfJuliaDogs.splice(0, 1);
	copyOfJuliaDogs.splice(-2);
	console.log(copyOfJuliaDogs);
	const completeListOfDogs = copyOfJuliaDogs.concat(dogsKate);
	completeListOfDogs.forEach(function (dog, i) {
		if (dog > 2) {
			console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
		} else {
			console.log(`Dog number ${i + 1} is still a puppy 🐶`);
		}
	});
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

///////////////////////////////////////
// The map Method

const euroToUsd = 1.1;

const movementsUSD = movements.map((mov) => {
	return mov * euroToUsd;
});

console.log(movements);
console.log(movementsUSD);

const movementsDescriptions = movements.map((mov, i) => {
	return `Movement ${i + 1}: You ${
		mov > 0 ? "deposited" : "withdrew"
	} : ${Math.abs(mov)}`;
});

console.log(movementsDescriptions);

///////////////////////////////////////
// The filter Method
const deposits = movements.filter((mov) => {
	return mov > 0;
});

console.log(movements);
console.log(deposits);

const withdrawal = movements.filter((mov) => {
	return mov < 0;
});

console.log(withdrawal);

///////////////////////////////////////
// The reduce Method
console.log(movements);
const balance = movements.reduce((acc, cur, i) => {
	console.log(`Iteration ${i}: ${acc}`);
	return acc + cur;
}, 0);

console.log(balance);

// Maximum value
const max = movements.reduce((acc, mov) => {
	if (acc > mov) {
		return acc;
	} else {
		return mov;
	}
}, movements[0]);
console.log(max);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
console.log("Coding Challenge #2");
const calcAverageHumanAge = (ages) => {
	const dogAgeInHumanYears = ages.map((age) => {
		return age <= 2 ? 2 * age : 16 + age * 4;
	});
	const getAdultDogs = dogAgeInHumanYears.filter((age) => {
		return age >= 18;
	});
	const avgAgeOfDogs = getAdultDogs.reduce((acc, age, i, arr) => {
		return acc + age / arr.length;
	}, 0);
	return avgAgeOfDogs;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

///////////////////////////////////////
// The Magic of Chaining Methods
console.log("Magic of Chaining Methods");

// Pipeline
const totalDepositsUSD = movements
	.filter((mov) => {
		return mov > 0;
	})
	// .map((mov) => {
	// 	return mov * euroToUsd;
	// })
	.map((mov, i, arr) => {
		// console.log(arr);
		return mov * euroToUsd;
	})
	.reduce((acc, mov) => {
		return acc + mov;
	}, 0);

console.log(totalDepositsUSD);

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
console.log("Coding Challenge #3");

const calcAverageHumanAgeChain = (ages) => {
	const avgAgeOfDogs = ages
		.map((age) => {
			return age <= 2 ? 2 * age : 16 + age * 4;
		})
		.filter((age) => {
			return age >= 18;
		})
		.reduce((acc, age, i, arr) => {
			return acc + age / arr.length;
		}, 0);

	return avgAgeOfDogs;
};

console.log(calcAverageHumanAgeChain([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAgeChain([16, 6, 10, 5, 6, 1, 4]));

///////////////////////////////////////
// The find Method
console.log("Find Method");
const firstWithdrawal = movements.find((mov) => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);
