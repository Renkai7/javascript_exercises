// Shadow Clone Technique
const createShadowClone = function (cloneCount) {
	cloneCount = 0;
	return function () {
		cloneCount++;
		console.log(cloneCount);
	};
};
const shadowCloneJutsu = createShadowClone(1);
shadowCloneJutsu();
shadowCloneJutsu();

// Chakra Control
const chakraControl = function () {
	let chakraLevel = 100;

	return function (n) {
		chakraLevel -= n;
		console.log(`Chakra level at ${chakraLevel}`);
	};
};

const useJutsu = chakraControl();
useJutsu(10);
useJutsu(10);

// Rasengan Training
const rasenganTraining = function () {
	let practiceCount = 0;

	return function () {
		practiceCount++;
		console.log(practiceCount);
	};
};

const practiceJutsu = rasenganTraining();
practiceJutsu();
practiceJutsu();

// Ninja Academy Enrollment
const ninjaAcademy = function () {
	const studentsEnrolled = [];

	return function (student) {
		studentsEnrolled.push(student);
		console.log(...studentsEnrolled);
	};
};

const enrollStudent = ninjaAcademy();
enrollStudent("Naruto");
enrollStudent("Sasuke");
enrollStudent("Sakura");

// Secret Jutsu
const secretJutsu = function () {
	const technique = "Multi Shadow Clone Jutsu";

	return function () {
		console.log(technique);
	};
};

const revealSecretJutsu = secretJutsu();
revealSecretJutsu();

// Kunai Inventory
const kunaiInventory = function () {
	let kunaiCount = 0;

	return {
		addKunai: function (n) {
			kunaiCount += n;
			console.log(`Kunai count: ${kunaiCount}`);
		},
		removeKunai: function (n) {
			kunaiCount -= n;
			console.log(`Kunai count: ${kunaiCount}`);
		},
	};
};

const kunaiUpdate = kunaiInventory();
kunaiUpdate.addKunai(100);
kunaiUpdate.removeKunai(15);

// Chakra Nature Training
const chakraNatureTraining = function () {
	let windTrainingProgress = 0;
	let fireTrainingProgress = 0;

	return {
		windChakraTraining: function () {
			windTrainingProgress += 10;
			console.log(`Wind chakra training progress: ${windTrainingProgress}`);
		},
		fireChakraTraining: function () {
			fireTrainingProgress += 10;
			console.log(`Fire chakra training progress: ${fireTrainingProgress}`);
		},
	};
};

const trainCharkaNature = chakraNatureTraining();
trainCharkaNature.windChakraTraining();
trainCharkaNature.fireChakraTraining();
trainCharkaNature.windChakraTraining();
trainCharkaNature.fireChakraTraining();

// Ninja Rank Examination
const ninjaRankExam = function () {
	const scores = [];

	return function (score) {
		scores.push(score);
		console.log(`Scores: ${scores}`);
	};
};

const addExamScore = ninjaRankExam();
addExamScore(80);
addExamScore(88);
addExamScore(100);

// Summoning Jutsu
const summoningJutsu = function () {
	let summonedCreature = "snake";

	return function () {
		summonedCreature = "toad";
		console.log(summonedCreature);
	};
};

const summon = summoningJutsu();
summon();

// Sharingan Activation
const sharinganActivation = function () {
	let stateOfSharingan = "activated";

	return function () {
		stateOfSharingan =
			stateOfSharingan === "activated" ? "deactivated" : "activated";
		console.log(`Sharingan is ${stateOfSharingan}`);
	};
};

const useSharingan = sharinganActivation();
useSharingan();
useSharingan();
