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

}

// == ADD TASK ===

function addTask(){
  const textTask=inputTask.value.trim();
}

