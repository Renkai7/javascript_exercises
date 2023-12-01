// Constructor function for Pokemon objects
function Pokemon(name, type, hp, attack) {
	this.name = name;
	this.type = type;
	this.hp = hp;
	this.attack = attack;
}

// Create Pokemon
const pikachu = new Pokemon("Pikachu", "Electric", 150, 90);
const charmander = new Pokemon("Charmander", "Fire", 130, 110);

const battleTurn = (playerPokemon, enemyPokemon) => {
	const damage = playerPokemon.attack;
	enemyPokemon.hp = enemyPokemon.hp - damage;
};
