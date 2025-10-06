const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage on page load
window.onload = loadTasks;

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = createTaskElement(taskText);

  taskList.appendChild(li);
  saveTask(taskText);

  taskInput.value = "";
}

function createTaskElement(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete Task";
  deleteBtn.className = "delete";

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent triggering complete toggle
    li.remove();
    removeTask(taskText);
  });

  li.appendChild(deleteBtn);
  return li;
}

// Save to localStorage
function saveTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove from localStorage
function removeTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks on page load
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(taskText => {
    const li = createTaskElement(taskText);
    taskList.appendChild(li);
  });
}
