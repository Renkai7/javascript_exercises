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
let removeID = 3;
students.delete(removeID);
console.log(students.has(removeID));
