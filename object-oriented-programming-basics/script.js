"use strict";
///////////////////////////////////////
// Constructor Functions and the new Operator

const Person = function (firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;

	// Never create a method inside a constructor function
	// this.calcAge = function () {
	// 	console.log(2037 - this.birthYear);
	// };
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matidla", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

Person.hey = function () {
	console.log("Hey there");
};

Person.hey();

///////////////////////////////////////
// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
	console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);

///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Never do this
Array.prototype.unique = function () {
	return [...new Set(this)];
};

console.log(arr.unique());

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
	this.make = make;
	this.speed = speed;
};

Car.prototype.accelerate = function () {
	this.speed += 10;
	console.log(`'${this.make}' going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
	this.speed -= 10;
	console.log(`'${this.make}' going at ${this.speed} km/h`);
};

const accord = new Car("Honda", 120);
const car2 = new Car("BMW", 130);
console.log(accord);

accord.accelerate();
car2.brake();

///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
	constructor(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	}

	// Methods will be added to .prototype property
	calcAge() {
		console.log(2037 - this.birthYear);
	}

	greet() {
		console.log(`Hey ${this.firstName}`);
	}

	get age() {
		return 2037 - this.birthYear;
	}

	set fullName(name) {
		if (name.includes(" ")) this._fullName = name;
		else alert(`${name} is not a full name!`);
	}

	get fullName() {
		return this._fullName;
	}

	// Static method
	static hey() {
		console.log("Hey there");
		console.log(this);
	}
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizens
// 3. Classes are executed in strict mode

PersonCl.hey();

///////////////////////////////////////
// Setters and Getters
const account = {
	owner: "jonas",
	movements: [200, 530, 120, 300],

	get latest() {
		return this.movements.slice(-1).pop();
	},

	set latest(mov) {
		this.movements.push(mov);
	},
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

///////////////////////////////////////
// Object.create
const PersonProto = {
	calcAge() {
		console.log(2037 - this.birthYear);
	},

	init(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	},
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
