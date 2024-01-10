// Display Character Names
const characters = ["Haseo", "Alkaid", "Atoli", "Pi"];
const displayCharacters = function (arr) {
	return arr;
};
const characterIntro = function (arr, fn) {
	const characterList = fn(arr);
	characterList.map((name) => {
		console.log(name);
	});
	return characterList;
};
console.log(characterIntro(characters, displayCharacters));

// Calculate Levels
const displayLevel = function () {
	let level = 10;
	return level;
};
const expToLevelUp = function (name, fn) {
	const calcExp = fn() * 1000;
	return `${name} needs ${calcExp} to level up.`;
};
console.log(expToLevelUp(characters[0], displayLevel));

// List Guild Members
const getGuildMembers = function (arr) {
	return [...arr];
};
const getGuildRanks = function (arr, fn) {
	const members = fn(arr);
	members.map((member) => {
		console.log(`${member}'s guild rank: 'Rookie'`);
	});
};
getGuildRanks(characters, getGuildMembers);

// Item Availability Checker
