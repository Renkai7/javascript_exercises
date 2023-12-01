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

// Battle Turn
const battleTurn = () => {
	// 1. Determine who is attacking and who is defending
	// 2. Perform attack
	// 3. Determine if battle is over
	// 4. Display results of battle (showcase if player or enemy pokemon won)
	// 5. Add experience gain at end if battle is won
};

// Inflict damage to enemy based on attack power
const performAttack = (playerPokemon, enemyPokemon) => {
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
