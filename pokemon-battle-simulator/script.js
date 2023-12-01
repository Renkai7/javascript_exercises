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
const charmander = new Pokemon("Charmander", "Fire", 8, 110, 5);

// Iniates combat
const battleTurn = (playerPokemon, enemyPokemon) => {
	performAttack(playerPokemon, enemyPokemon);

	if (isBattleOver(enemyPokemon)) {
		displayBattleResults(playerPokemon, enemyPokemon);
	}
};

// Inflict damage to enemy based on attack power
const performAttack = (attacker, defender) => {
	const damage = calculateDamage(attacker);
	defender.hp = defender.hp - damage;
	console.log(
		`${attacker.name} attacks ${defender.name} for ${damage} damage!`
	);
};

// Damage formula
const calculateDamage = (pokemon) => {
	const damageFormula = Math.trunc(
		(((2 * pokemon.level) / 5 + 2) * pokemon.attack) / 50 + 2
	);
	return damageFormula;
};

// Determine if battle ends
const isBattleOver = (defender) => {
	if (defender.hp <= 0) {
		return true;
	} else {
		return false;
	}
};

// Display results of battle
const displayBattleResults = (attacker, defender) => {
	console.log(`${attacker.name} has defeated ${defender.name}!`);
};

battleTurn(pikachu, charmander);
