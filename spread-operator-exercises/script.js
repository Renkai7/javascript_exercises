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
