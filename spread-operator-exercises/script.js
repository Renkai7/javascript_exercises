// Combining Arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3);

// Copying an Array
let originalArray = ["a", "b", "c"];
const copiedArray = [...originalArray];
console.log(copiedArray);