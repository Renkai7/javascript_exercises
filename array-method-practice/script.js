"use strict";
// Exercise 1: Creating a New Todo
const todos = [];

const addItemToList = function (item) {
	todos.push(item);
};

addItemToList("Buy milk");
addItemToList("Cook breakfast");
console.log("to-do list: ", [...todos]);

// Exercise 2: Displaying Todos
const displayTodoItems = function (todoList) {
	todoList.forEach((todo) => {
		console.log(todo);
	});
};
displayTodoItems(todos);

// Exercise 3: Counting Todos
const showNumberOfTodos = function (todoList) {
	return todoList.length;
};
console.log(showNumberOfTodos(todos));

// Exercise 4: Finding a Specific Todo
const indexOfTodoItem = function (todoList, itemToFind) {
	const indexOfItem = todoList.indexOf(itemToFind);
	if (indexOfItem === -1) {
		console.log("Item not found in list.");
	}
	return indexOfItem;
};
console.log(indexOfTodoItem(todos, "Buy milk"));

// Exercise 5: Deleting a Todo
const removeTodoItem = function (todoList, itemToRemove) {
	todoList.splice(itemToRemove, 1);
};
removeTodoItem(todos, "Buy milk");
console.log("to-do list: ", [...todos]);

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
addItemToList("Buy milk");
updateToDoItem(todos, "Buy milk", "Buy soda", indexOfTodoItem);
console.log("to-do list: ", [...todos]);
