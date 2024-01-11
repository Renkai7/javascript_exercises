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
const itemInventory = function () {
	const inventory = ["healing potion", "smokescreen", "gold axe"];
	return [...inventory];
};

const checkItemAvaility = function (item, fn) {
	const playerInventory = fn();

	if (!playerInventory.includes(item)) {
		return `${item} is not in your inventory.`;
	}

	return `You have ${item} in your inventory`;
};
console.log(checkItemAvaility("potion", itemInventory));
console.log(checkItemAvaility("gold axe", itemInventory));

// Map Locations Revealer
const mapDetails = function () {
	const maps = [
		{
			location: "Mac Anu",
			secret: "the R:2 version of town is bigger than the R:1 version.",
		},
		{
			location: "Lumina Cloth",
			secret: "it is a PVP zone",
		},
	];

	return [...maps];
};

const mapRevealer = function (location, fn) {
	const maps = fn();
	for (const obj of maps) {
		if (location === obj.location) {
			return `Here is a secret about ${obj.location}: ${obj.secret}`;
		}
	}
	return "Location doesn't exist";
};
// mapRevealer("Mac Anu", mapDetails);
console.log(mapRevealer("Mac Anu", mapDetails));
console.log(mapRevealer("Tac Anu", mapDetails));

// Character Bio Updater
const updateBio = function (nameChange) {
	const name = nameChange;
	const characterBio = "Adept Rogue";
	const characterInfo = {
		name: name,
		bio: characterBio,
	};

	return characterInfo;
};

const characterBioUpdater = function (fn, updatedName = "Haseo") {
	const nameChange = fn(updatedName);
	return `${nameChange.name}: ${nameChange.bio}`;
};
console.log(characterBioUpdater(updateBio, "Alkaid"));
console.log(characterBioUpdater(updateBio));

// Guild Event Scheduler
const guildEvent = function (event, time) {
	return `Guild Event: ${event} at ${time}`;
};

const scheduleGuildEvent = function (fn, event, time) {
	const newEvent = fn(event, time);
	return newEvent;
};
console.log(scheduleGuildEvent(guildEvent, "Raid", 9));

// Battle Simulator
const battleOutcome = function (player, enemy) {
	return `${player} defeats ${enemy}`;
};

const setUpBattle = function (player, enemy, fn) {
	const decideWinner = fn(player, enemy);
	return decideWinner;
};
console.log(setUpBattle("Haseo", "Golem", battleOutcome));

// Item Crafting System
const craftItem = function (item1, item2) {
	const craftOutcome =
		item1 === "iron" && item2 === "cloth" ? "iron armor" : "Failed to craft";
	return craftOutcome;
};

const startCrafting = function (item1, item2, fn) {
	const craftedItem = fn(item1, item2);
	return craftedItem;
};
console.log(startCrafting("iron", "cloth", craftItem));

// Skill Learning
const learnNewSkill = function (skill) {
	return skill;
};

const useSkillBook = function (skill, fn) {
	const learnedSkill = fn(skill);
	return `You learned ${learnedSkill}!`;
};
console.log(useSkillBook("fireball", learnNewSkill));

// Character Dialogue with .call()
const speak = function (dialogue) {
	console.log(`${this.name}: ${dialogue}`);
};

const haseo = {
	name: "Haseo",
};
const alkaid = {
	name: "Alkaid",
};

speak.call(haseo, "I'll save you no matter what.");
speak.call(alkaid, "Thank you for everything.");

// Party Stats with .apply()
const displayStats = function (str, def) {
	console.log(`${this.name} stats: Strength: (${str}) | Defense: (${def})`);
};

displayStats.apply(haseo, [50, 36]);

// Guild event scheduling with .call()
const guildEventInfo = {
	eventName: "fun party dungeon exploration",
	eventTime: "8pm",
};
const guild = {
	name: "Canard",
	scheduleEvent: function (event, time) {
		console.log(`Guild event for ${this.name}: ${event} at ${time}`);
	},
};

guild.scheduleEvent(guildEventInfo.eventName, guildEventInfo.eventTime);
