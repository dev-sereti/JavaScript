// =================== 1. GET HTML ELEMENTS ===================
const inputTask = document.getElementById("taskInput"); // text input element
const btnAdd = document.getElementById("addBtn");       // add button
const listTask = document.getElementById("taskList");   // <ul> or <ol> for tasks

// =================== 2. CREATE TASK ELEMENT ===================
// Build a single <li> with text and delete button, return it.
function createTaskElement(taskText) {
  const li = document.createElement("li");     // create <li>
  li.textContent = taskText;                   // set visible text

  // Toggle completed style when clicking the <li>
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Create the delete button and set properties
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete";

  // Clicking delete should remove the item and update storage
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();            // prevent li click from firing
    handleTaskDelete(taskText, li); // delegate deletion to a separate function
  });

  li.appendChild(deleteBtn); // put the button inside the <li>
  return li;                 // return the constructed element
}

// =================== 3. ADD TASK ===================
function addTask() {
  const taskText = inputTask.value.trim(); // read value from the input

  if (taskText === "") return; // don't add empty tasks

  const li = createTaskElement(taskText); // create UI element for the task

  listTask.appendChild(li);   // add it to the page
  saveTask(taskText);         // persist in localStorage
  inputTask.value = "";       // clear input field
}


// Separate function to handle deleting both UI and storage
function handleTaskDelete(taskText, liElement) {
  // Optional: confirm deletion
  // if (!confirm(`Delete "${taskText}"?`)) return;

  liElement.remove();    // remove from DOM
  removeTask(taskText);  // remove from localStorage
}

// =================== 5. STORAGE FUNCTIONS ===================
// Save a task string into localStorage
function saveTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || []; // load or empty array
  tasks.push(taskText);                                          // add new task
  localStorage.setItem("tasks", JSON.stringify(tasks));          // save back
}

// Remove a task string from localStorage
function removeTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskText); // remove all matching strings
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load saved tasks and render them on the page
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(taskText => {
    const li = createTaskElement(taskText); // use same creation function
    listTask.appendChild(li);
  });
}

// =================== 6. INITIALIZATION ===================
// Wire up event listeners. Ensure elements exist (script should be loaded after HTML).
btnAdd.addEventListener("click", addTask);
window.onload = loadTasks;
