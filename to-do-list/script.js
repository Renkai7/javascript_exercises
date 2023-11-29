// DOM UIs
const taskInput = document.querySelector("#task-input");
const addButton = document.querySelector("#add-button");
const taskList = document.querySelector("#task-list");

const addTask = () => {
	const newCheckbox = document.createElement("input");
	const newTask = document.createElement("label");
	const newListItem = document.createElement("li");

	newCheckbox.setAttribute("type", "checkbox");

	newCheckbox.addEventListener("change", crossOut);
	newTask.innerHTML = taskInput.value;
	taskList.appendChild(newListItem);
	newListItem.appendChild(newCheckbox);
	newListItem.appendChild(newTask);
};

addButton.addEventListener("click", addTask);
