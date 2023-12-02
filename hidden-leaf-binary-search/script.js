const binarySearch = (ninjas, targetName) => {
	let left = 0;
	let right = ninjas.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (ninjas[mid] === targetName) {
			return mid;
		} else if (ninjas[mid] < targetName) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
};

const hiddenLeafNinjas = [
	"Hinata",
	"Kakashi",
	"Naruto",
	"Rock Lee",
	"Sakura",
	"Sasuke",
	"Shikamaru",
	"Tenten",
	"Neji",
];

const targetNinja = "Itachi";
const resultIndex = binarySearch(hiddenLeafNinjas, targetNinja);

if (resultIndex !== -1) {
	console.log(`${targetNinja} found at ${resultIndex}`);
} else {
	console.log(`${targetNinja} not found in array`);
}
