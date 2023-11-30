// DOM UIs
const taskInput = document.querySelector("#task-input");
const addButton = document.querySelector("#add-button");
const taskList = document.querySelector("#task-list");
const totalTasks = document.querySelector("#total-tasks");
const clearCompleted = document.querySelector("#clear-completed");

// Places strike through on label if checkbox is checked
const crossOut = (event) => {
	const checkbox = event.target;

	const label = checkbox.nextElementSibling;
	label.classList.toggle("line-through");
};

// Adds tasks to list
const addTask = () => {
	const newCheckbox = document.createElement("input");
	const newTask = document.createElement("label");
	const newListItem = document.createElement("li");
	newListItem.className = "task-item";

	newCheckbox.setAttribute("type", "checkbox");
	newCheckbox.addEventListener("change", crossOut);

	newTask.innerHTML = taskInput.value;
	taskList.appendChild(newListItem);
	newListItem.appendChild(newCheckbox);
	newListItem.appendChild(newTask);

	updateTaskCount();
};

// Update task total counter
const updateTaskCount = () => {
	const tasks = document.querySelectorAll(".task-item");
	totalTasks.textContent = tasks.length;
};

// Removes task if checkbox is checked
const removeTask = () => {
	const tasks = document.querySelectorAll(".task-item");
	for (let i = 0; i < tasks.length; i++) {
		const checkbox = tasks[i].querySelector("input[type='checkbox']");

		if (checkbox.checked) {
			tasks[i].remove();
			updateTaskCount();
		}
	}
};

// Buttons
addButton.addEventListener("click", addTask);
clearCompleted.addEventListener("click", removeTask);
