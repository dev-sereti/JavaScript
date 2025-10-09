// Get references to HTML elements by their IDs

const inputTask=document.getElementById("taskInput");
const btnAdd=document.getElementById("addBtn");
const listTask=document.getElementById("taskList");

// ==== CREATE TASK ELEMENT ===

function createTaskElement(textTask){
  const li=document.createElement("li");
  // Set the task text inside the list item.
  li.textContent=textTask; 

  // Toggle completion on click
  li.addEventListener("click",()=>{
    li.classList.toggle("completed");
  });

  // Create delete button
  const deleteBtn=document.createElement("button");
  deleteBtn.textContent=X; // Button label
  deleteBtn.className="delete"; // Add CSS class for styling

  // Add event listener for delete button
  deleteBtn.addEventListener("click",(e)=>{
    e.stopPropagation; // prevent completion toggle
    li.remove; // Remove the task from the page
    removeTask(textTask);

  });
}

// == ADD TASK ===

function addTask(){
  const textTask=inputTask.value.trim();
}

