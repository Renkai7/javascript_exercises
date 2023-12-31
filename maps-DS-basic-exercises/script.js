// Creating and Populating a Map
const students = new Map();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");
students.set(4, "Mark");
students.set(5, "Zack");
students.set(6, "Cloud");

// Retrieving values
const studentID = 2;
console.log(students.get(studentID));

// Checking for a Key
const checkID = 4;
students.has(checkID) && console.log(`Student with ID: ${checkID} exists.`);

// Iterating Over a Map
for (const [studentId, student] of students.entries()) {
	console.log(`${studentId}: ${student}`);
}

// Size of a Map
console.log(students.size);

// Deleting an Entry
let removeID = 4;
students.delete(removeID);
console.log(students.has(removeID));

// Convert Map to Array
const arrStudents = [...students];
console.log(arrStudents);

// Convert Array to Map
let arrayData = [
	[6, "Frank"],
	[7, "Grace"],
];
const teachers = new Map();
for (const entry of arrayData) {
	teachers.set(entry[0], entry[1]);
}
console.log(teachers.get(6));

// Filter a Map
let gradeData = new Map([
	[1, "A"],
	[2, "B"],
	[3, "A"],
]);
// Condition: Include only students with grade 'A'
const highGradeStudents = new Map();
for (const [gradeID, grade] of gradeData) {
	grade === "A" && highGradeStudents.set(gradeID, students.get(gradeID));
}
console.log(highGradeStudents);
