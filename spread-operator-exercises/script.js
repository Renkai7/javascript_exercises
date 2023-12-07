// Combining Arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3);

// Copying an Array
let originalArray = ["a", "b", "c"];
const copiedArray = [...originalArray];
console.log(copiedArray);

// Merging Arrays with Additional Elements
let fruits = ["apple", "banana"];
let vegetables = ["carrot", "beetroot"];
const fruitsAndVegetables = [...fruits, ...vegetables, "orange", "potato"];
console.log(fruitsAndVegetables);

// Expanding Strings into Arrays
let greeting = "hello";
const greetingArray = [...greeting];
console.log(greetingArray);

// Concatenating Multiple Arrays
let nums1 = [1, 2];
let nums2 = [3, 4];
let nums3 = [5, 6];
let allNums = [...nums1, ...nums2, ...nums3];
console.log("all nums", allNums);

// Inserting Elements in the Middle of an Array
let numbers = [1, 4, 5];
const newNumbers = [2, 3];
const newNumberArray = [
	...numbers.slice(0, 1),
	...newNumbers,
	...numbers.slice(1),
];
console.log(newNumberArray);

// Spread Objects to Merge Properties
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// Copying an Object
let person = { name: "John", age: 30 };
const copyPerson = { ...person };
console.log(copyPerson);

// Overidding Object Properties
let original = { a: 1, b: 2 };
let update = { b: 3, c: 4 };
original = { ...original, ...update };
console.log(original);

// Combining Array Inside an Object
let state = {
	fruits: ["apple", "banana"],
	vegetables: ["carrot", "beetroot"],
};
const newState = { food: [...state.fruits, ...state.vegetables] };
console.log(newState);
