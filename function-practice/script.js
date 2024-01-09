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

	return `A level ${level} Persona has ${personaHP} HP`;
};
console.log(calculateHP(2));

// Persona Fusion
const personaFusion = function (persona1, persona2) {
	const fusedPersona =
		persona1.slice(0, 3) + persona2.slice(0, 3).toLowerCase();
	return `${persona1} and ${persona2} fuse together to become: ${fusedPersona}`;
};
console.log(personaFusion("Arsène", "Johanna"));
