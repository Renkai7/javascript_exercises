// Basic Set Operations
const numbers = [1, 2, 3, 4, 5];
// Add numbers to new set
const numSet = new Set(numbers);
// Remove value 5 from num set
numSet.delete(5);
console.log(numSet);

// Union of Sets
const setA = new Set([1, 2, 3]);
const setB = new Set([4, 3, 2]);

const combineSets = (setOne, setTwo) => {
	const mergedSet = new Set();
	for (const item of setOne) {
		mergedSet.add(item);
	}
	for (const item of setTwo) {
		mergedSet.add(item);
	}
	return mergedSet;
};
console.log(combineSets(setA, setB));

// Intersection of Sets
const set1 = new Set(["apple", "banana", "orange"]);
const set2 = new Set(["banana", "berry", "apple"]);

const intersectSets = (setOne, setTwo) => {
	const fruitsInCommonSet = new Set();
	for (const fruit of setOne) {
		setTwo.has(fruit) && fruitsInCommonSet.add(fruit);
	}
	return fruitsInCommonSet;
};

console.log(intersectSets(set1, set2));

// Difference of Sets
const setX = new Set(["math", "science", "history"]);
const setY = new Set(["art", "math", "biology"]);

const differencesOfSets = (setOne, setTwo) => {
	const itemsNotInCommonSet = new Set();
	for (const fruit of setOne) {
		!setTwo.has(fruit) && itemsNotInCommonSet.add(fruit);
	}
	return itemsNotInCommonSet;
};
console.log(differencesOfSets(setX, setY));
