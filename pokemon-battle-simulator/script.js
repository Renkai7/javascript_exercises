// Constructor function for Pokemon objects
function Pokemon(name, type, hp, attack, level) {
	this.name = name;
	this.type = type;
	this.hp = hp;
	this.attack = attack;
	this.level = level;
}

// Create Pokemon
const pikachu = new Pokemon("Pikachu", "Electric", 150, 90, 5);
const charmander = new Pokemon("Charmander", "Fire", 130, 110, 5);

// Inflict damage to enemy based on attack power
const battleTurn = (playerPokemon, enemyPokemon) => {
	const damage = calculateDamage(playerPokemon);
	enemyPokemon.hp = enemyPokemon.hp - damage;
	console.log(
		`${playerPokemon.name} attacks ${enemyPokemon.name} for ${damage} damage!`
	);
};

// Damage formula
const calculateDamage = (pokemon) => {
	const damageFormula = Math.trunc(
		(((2 * pokemon.level) / 5 + 2) * pokemon.attack) / 50 + 2
	);
	return damageFormula;
};

battleTurn(pikachu, charmander);
battleTurn(pikachu, charmander);

console.log(charmander.hp);
