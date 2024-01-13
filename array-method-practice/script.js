"use strict";
// Exercise 1: Creating a New Todo
const todos = [];

const addItemToList = function (item) {
	todos.push(item);
};

// Exercise 2: Displaying Todos
const displayTodoItems = function (todoList) {
	todoList.forEach((todo) => {
		console.log(todo);
	});
};

// Exercise 3: Counting Todos
const showNumberOfTodos = function (todoList) {
	return todoList.length;
};

// Exercise 4: Finding a Specific Todo
const indexOfTodoItem = function (todoList, itemToFind) {
	const indexOfItem = todoList.indexOf(itemToFind);
	if (indexOfItem === -1) {
		console.log("Item not found in list.");
	}
	return indexOfItem;
};

// Exercise 5: Deleting a Todo
const removeTodoItem = function (todoList, itemToRemove) {
	todoList.splice(itemToRemove, 1);
};

// Exercise 6: Updating a Todo
const updateToDoItem = function (
	todoList,
	itemToBeUpdated,
	updatedNameOfItem,
	findItemFn
) {
	const indexOfItem = findItemFn(todoList, itemToBeUpdated);
	if (!indexOfItem !== -1) {
		todoList[indexOfItem] = updatedNameOfItem;
	}
	return;
};

// Exercise 7: Filtering Todos
const filterListForWord = function (todoList, filterWord) {
	filterWord = filterWord.toLowerCase();
	const filteredList = todoList.filter((item) => {
		item = item.toLowerCase();
		return item.includes(filterWord);
	});
	return filteredList;
};
// Exercise 9: Finding Completed Todos
const filterForCompletedTask = function (todoList) {
	const filteredList = todoList.filter((item) => item.isChecked);
	return filteredList;
};
// Exercise 8: Checking Off a Todo
const checkOffTodoItem = function (todoList, checkedOffItem) {
	const updatedList = todoList.map((item) => {
		if (item === checkedOffItem) {
			return { itemName: item, isChecked: true };
		}
		return { itemName: item };
	});
	updateList(todoList, updatedList);
};

// Exercise 10: Clearing Completed Todos
const clearCompletedTasks = function (todoList) {
	const filteredList = todoList.filter((item) => !item.isChecked);
	updateList(todoList, filteredList);
};

const updateList = function (todoList, updatedList) {
	todoList.length = 0;
	todoList.push(...updatedList);
};

addItemToList("Buy milk");
addItemToList("Cook breakfast");
console.log("to-do list: ", [...todos]);

displayTodoItems(todos);
console.log(showNumberOfTodos(todos));

console.log(indexOfTodoItem(todos, "Buy milk"));

removeTodoItem(todos, "Buy milk");
console.log("to-do list: ", [...todos]);

addItemToList("Buy milk");
addItemToList("Buy videogames");
updateToDoItem(todos, "Buy milk", "Buy soda", indexOfTodoItem);
console.log("to-do list: ", [...todos]);
console.log("to-do list (filter: Buy): ", filterListForWord(todos, "Buy"));

checkOffTodoItem(todos, "Buy soda");
console.log("to-do list (checked off): ", [...todos]);

console.log("Completed items: ", filterForCompletedTask(todos));

clearCompletedTasks(todos);
console.log("to-do list (after being cleared): ", [...todos]);
