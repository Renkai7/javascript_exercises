// Basic Set Operations
const numbers = [1, 2, 3, 4, 5];
const numSet = new Set();

// Add items from numbers array into num set
for (const number of numbers) {
	numSet.add(number);
}
console.log(numSet);

// Remove value 5 from num set
numSet.delete(5);
console.log(numSet);
