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
