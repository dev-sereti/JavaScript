// Get references to HTML elements by their ID
const taskInput=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");

// When the page loads, call loadTasks() to show saved tasks
window.onload=loadTasks;

// When the "Add" button is clicked, run the addTask() function
addBtn.addEventListener("click",addTask);

// ---------------------- ADD TASK ----------------------
function addTask(){
  // Get the text the user typed, and remove any extra spaces
  const taskText=taskInput.value.trim();

   // If the input is empty, stop the function (don't add blank tasks)
   if(taskText==="")return;

   // Create a new list item (<li>) element for the task
   const li =createTaskElement(taskText);

   // Add (append) that <li> to the main task list in the HTML
   taskList.appendChild(li);

  // Save the new task in localStorage so it stays even after page refresh
  saveTask(taskText);

  // Clear the input box so user can type a new task
  taskInput.value="";

}

// ---------------------- CREATE TASK ELEMENT ----------------------
function createTaskElement(taskText){
  // Create a new list item (<li>) element
  const li=document.createElement("li");

   // Add the task text inside the <li>
   li.textContent=taskText;

   // Add a click event to mark tasks as completed
   // When clicked, toggle a CSS class "completed"
   li.addEventListener("click",()=>{
    li.classList.toggle("completed.");
   });

   // Create a delete button for removing tasks
   const deleteBtn=document.createElement("delete");
   deleteBtn.textContent="Delete Task"; //The "Delete Task" shown on the button
   deleteBtn.className="delete"; // Assign a CSS class for styling
   
   // When the delete button is clicked
   deleteBtn.addEventListener("click",(e)=>{
    // Prevent the click from also triggering the "complete" toggle
    e.stopPropagation();

    // Remove the task from the page
    li.remove();
    // Also remove it from localStorage
    remove(taskText);
   });

   // Add the delete button inside the <li>
   li.appendChild(deleteBtn);

   // Return the fully built <li> element
   return li;
}
// ---------------------- SAVE TASK ----------------------
function saveTask(taskText){
  // Get all saved tasks from localStorage (or an empty array if none)
  let tasks=JSON.parse(localStorage.getItem(tasks)) || [];

  // Create a new array that excludes the deleted task
  // The filter() method keeps only tasks that are NOT equal to taskText.
  tasks=tasks.filter(tasks=>task!==taskText);

  // Save the new array back to localStorage (without the deleted task)
  localStorage.setItem("tasks",JSON.stringify(tasks));
}

// ---------------------- LOAD TASKS ----------------------

function loadTasks(){
  // Get all tasks saved in localStorage (or an empty array if none)
  let tasks=JSON.parse(localStorage.getItem("tasks")) || [];

  // Loop through each saved task
  tasks.forEach(taskText=>{
    // For each task, create a new <li> element
    const li=createTaskElement(taskText);

  })

}