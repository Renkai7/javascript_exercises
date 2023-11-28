// This loops through an array to find the lowest value
const findMinValue = (arr) => {
	let minValue = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (minValue > arr[i]) {
			minValue = arr[i];
		}
	}

	return minValue;
};

const numbers = [5, 3, 9, 1, 7, 2];
const min = findMinValue(numbers);
console.log(`The minimum value in the array is: ${min}.`);
