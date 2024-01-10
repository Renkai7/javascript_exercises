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
