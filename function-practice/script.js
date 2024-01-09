// Default Persona
const defaultPersona = function (persona = "Arsène") {
	return persona;
};
console.log(defaultPersona());
console.log(defaultPersona("Johanna"));

// Persona Strength
const personaStrength = function (name, level = 1) {
	return `Persona: ${name} | Level: ${level}`;
};
console.log(personaStrength("Arsène"));
console.log(personaStrength("Arsène", 80));

// Calculate HP
const calculateHP = function (level, baseHP = 50) {
	const personaHP = level * baseHP;

	return personaHP;
};
console.log(calculateHP(2));

// Persona Fusion
const personaFusion = function (persona1, persona2) {
	const fusedPersona =
		persona1.slice(0, 3) + persona2.slice(0, 3).toLowerCase();
	return `${persona1} and ${persona2} fuse together to become: ${fusedPersona}`;
};
console.log(personaFusion("Arsène", "Johanna"));

// Persona Skills
const listSkills = function (persona, ...skills) {
	return `${persona} has these skills: ${skills}`;
};
console.log(listSkills("Arsène", ...["fire", "attack"]));

// Find Weakness
const findWeakness = function (persona, attributes) {
	let weakest = "none";
	let minStrength = "strong";
	for (const [element, strength] of Object.entries(attributes)) {
		if (strength == "weak" && minStrength !== "weak") {
			weakest = element;
			minStrength = strength;
		}
	}
	return `${persona} is weakest to ${weakest}`;
};
console.log(findWeakness("Arsène", { fire: "weak", ice: "strong" }));

// Persona Evolution
const personaEvolution = function (persona, level, evolvesAt = 30) {
	if (level >= evolvesAt) {
		const evolvedPersona = "Izanami";
		return `${persona} evolved into ${evolvedPersona}!`;
	}

	return persona;
};
console.log(personaEvolution("Arsène", 30));
console.log(personaEvolution("Arsène", 20));

// Team HP Total
const totalTeamHP = function (...levels) {
	const baseHP = 50;
	return levels.reduce((total, level) => total + calculateHP(level, baseHP), 0);
};
console.log(totalTeamHP(10, 60, 80, 26));

// Persona Comparison
const comparePersona = function (persona1, level1, persona2, level2) {
	if (level1 > level2) {
		return `${persona1} is stronger than ${persona2}`;
	}
	return `${persona2} is stronger than ${persona1}`;
};
console.log(comparePersona("Arsène", 56, "Anat", 70));

// Shadow Encounter
const shadowEncounter = function (shadow, persona = "Arsène") {
	return `${persona} encounters ${shadow}!`;
};
console.log(shadowEncounter("Pyro Jack"));
