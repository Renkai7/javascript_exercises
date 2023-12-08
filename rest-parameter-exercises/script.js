// Basic Rest Parameters
const sum = (...numbers) => {
	let total = 0;
	for (let i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
};

console.log(sum(1, 2, 3));

// Combining Rest Parameters with Regular Parameters
const greet = (firstName, lastName, ...titles) => {
	return `${firstName} ${lastName} ${titles}`;
};

console.log(greet("Ren", "Tsukino", "Phantom Thief", "Student", "Brewer"));
