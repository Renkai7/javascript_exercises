"use strict";

// Exercise 1: Create a Character Class
class Character {
	constructor(name, health, strength) {
		this.name = name;
		this.health = health;
		this.strength = strength;

		// Exercise 8: Add Inventory to Hero
		this.inventory = [];
	}

	// Exercise 2: Add a Method to the Character Class
	describe() {
		return `Name: ${this.name} | HP: ${this.health} | Strength: ${this.strength}`;
	}

	addToInventory(item) {
		this.inventory.push(item);
	}

	openInventory() {
		return `Inventory: ${[...this.inventory]}`;
	}
}
// Exercise 3: Create a Hero Subclass
class Hero extends Character {
	constructor(name, health, strength, level) {
		super(name, health, strength);
		this.level = level;
		this.isWeaponEquipped = false;
	}

	describe() {
		return `Name: ${this.name} | HP: ${this.health} | Level: ${this.level} | Strength: ${this.strength}`;
	}
	// Exercise 4: Add a Method to Increase Level
	levelUp() {
		return this.level++;
	}

	// Exercise 6: Implement an Attack Method
	attack(target) {
		target.health -= this.strength * 10;
	}

	equipWeapon(weapon) {
		this.isWeaponEquipped = true;
		this.strength += weapon.attackBonus;
	}
}

// Exercise 5: Create a Monster Subclass
class Monster extends Character {
	constructor(name, health, strength, monsterType) {
		super(name, health, strength);
		this.monsterType = monsterType;
	}

	describe() {
		return `Name: ${this.name} | HP: ${this.health} | Monster Type: ${this.monsterType} | Strength: ${this.strength}`;
	}

	// Exercise 6: Implement an Attack Method
	attack(target) {
		target.health -= this.strength - 50;
	}
}

// Exercise 9: Create a Weapon Class
class Weapon {
	constructor(name, attackBonus, durability) {
		this.name = name;
		this.attackBonus = attackBonus;
		this.durability = durability;
	}

	use() {
		this.durability -= 1;
		this.durability = this.durability < 0 ? 0 : this.durability;
	}
}

// Exercise 7: Create a Battle Function
const battle = function (player, enemy) {
	player.attack(enemy);
	enemy.health = enemy.health < 0 ? 0 : enemy.health;
};

const warrior = new Hero("Haseo", 150, 90, 1);
const boss = new Monster("Ovan", 500, "boss", 200);
const saber = new Weapon("Saber", 20, 100);

console.log(warrior.describe());
console.log(warrior.levelUp());
console.log(warrior.describe());

console.log(boss.describe());

battle(warrior, boss);

warrior.addToInventory("sword");
warrior.addToInventory("potion");
console.log(warrior.openInventory());

console.log(warrior.describe());
warrior.equipWeapon(saber);
console.log(warrior.describe());
