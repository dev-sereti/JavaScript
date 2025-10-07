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

}
