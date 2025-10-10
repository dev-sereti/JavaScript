// Get references to HTML elements by their IDs

const inputTask=document.getElementById("taskInput");
const btnAdd=document.getElementById("addBtn");
const listTask=document.getElementById("taskList");

// ==== CREATE TASK ELEMENT ===

function createTaskElement(textTask){
const li =document.createElement("li");
li.textContent=textTask;

li.addEventListener("click",()=>{
  li.classList.toggle("completed");
});

deleteBtn=document.createElement("button");
deleteBtn.textContent="X";
deleteBtn.className="delete";

deleteBtn.addEventListener("click",(e)=>{
  e.stopPropagation;
  li.remove;
  removeTask(textTask);
});
li.appendChild(deleteBtn);
return li;

}
// == ADD TASK ===

function addTask(){
  // Get user input and remove some extra spaces .
  const textTask=inputTask.value.trim();
  // Stop in the input field is empty.
  if(textTask==="");return;

  //Create a new task element.
  const li=createTaskElement(textTask);

  //Add the new task element to the task list
  listTask.appendChild(li);

  // Save the task text in localStorage

  saveTask(textTask);
  //Clear the input box after adding the task
  inputTask.value="";

}

