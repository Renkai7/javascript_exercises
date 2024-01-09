"use strict";

const characterForm = document.querySelector("#characterForm");
const characterNameInput = document.querySelector("#characterName");

const resetButton = document.querySelector("#resetButton");

const resultsDiv = document.querySelector("#result");

const narutoCharacters = [
	"Naruto",
	"Sasuke",
	"Sakura",
	"Kakashi",
	"Neji",
	"Hinata",
];

characterForm.addEventListener("submit", function (e) {
	e.preventDefault();
	const character = characterNameInput.value.trim().toLowerCase();
	const firstLetterOfCharacter = character.slice(0, 1).toUpperCase();
	const characterFullName = firstLetterOfCharacter.concat(
		character.substring(1, character.length)
	);

	if (narutoCharacters.includes(characterFullName)) {
		resultsDiv.textContent = `Character found! Name: ${characterFullName}`;
		const characterSubstring = characterFullName.substring(0, 3);
		resultsDiv.innerHTML += `<br>Substring (First 3 characters): ${characterSubstring}`;
		const characterArr = characterFullName.split("");
		resultsDiv.innerHTML += "<br>Characters: ";
		characterArr.forEach(function (char) {
			resultsDiv.innerHTML += char + " ";
		});
		console.log(characterArr);
	} else {
		resultsDiv.textContent = `${characterFullName} is not inside the database.`;
	}
});

resetButton.addEventListener("click", function () {
	characterNameInput.value = "";
	resultsDiv.textContent = "";
});
