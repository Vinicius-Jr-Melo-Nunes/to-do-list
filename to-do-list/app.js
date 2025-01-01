document.getElementById("addTaskButton").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("toDoList");
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  li.appendChild(span);

  const div = document.createElement("div");

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.addEventListener("click", () => completeTask(li));
  div.appendChild(completeButton);

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => removeTask(li));
  div.appendChild(removeButton);

  li.appendChild(div);
  taskList.appendChild(li);
  taskInput.value = "";
}

function completeTask(taskItem) {
  taskItem.classList.toggle("completed");
}

function removeTask(taskItem) {
  taskItem.remove();
}
