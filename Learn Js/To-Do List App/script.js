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
    

   });

   
}
