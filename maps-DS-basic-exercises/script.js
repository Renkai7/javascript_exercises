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
