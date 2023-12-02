/**
 * Sorts an array of ninjas alphabetically using the bubble sort algorithm.
 * @param {string[]} ninjas - The array of ninjas to be sorted.
 * @returns {string[]} - The sorted array of ninjas.
 */

const bubbleSort = (ninjas) => {
	const sortedNinjas = [...ninjas]; // Create a copy to avoid modifying original array
	let swapped = true;

	while (swapped) {
		swapped = false;
		for (let i = 0; i < ninjas.length - 1; i++) {
			if (ninjas[i] > ninjas[i + 1]) {
				let temp = ninjas[i];
				ninjas[i] = ninjas[i + 1];
				ninjas[i + 1] = temp;
				swapped = true;
			}
		}
	}

	return sortedNinjas;
};

const hiddenLeafNinjas = [
	"Kakashi",
	"Naruto",
	"Sasuke",
	"Sakura",
	"Hinata",
	"Shikamaru",
	"Neji",
	"Rock Lee",
	"Tenten",
];

const sortedHiddenLeafNinja = bubbleSort(hiddenLeafNinjas);
console.log(hiddenLeafNinjas);
console.log(sortedHiddenLeafNinja);
console.log(hiddenLeafNinjas);
