// Get references to HTML elements by their IDs

const inputTask=document.getElementById("taskInput");
const btnAdd=document.getElementById("addBtn");
const listTask=document.getElementById("taskList");

// ==Create Element Task Function ==

function createElementTask(taskText){
  const li=document.createElement("li");
  li.textContent=taskText;

  li.addEventListener("click",()=>{
    li.classList.toggle("completed");
  });

  // Create a delete button.

  deleteBtn=document.createElement("button");

  //Add text content to and className deleteBtn
  deleteBtn.textContent="X";
  deleteBtn.className="delete";

  // When the deleteBtn is clicked.

  deleteBtn.addEventListener("click",(e)=>{
    e.stopPropagation;
    li.remove; //Delete li element.
    removeTask(taskText);
  });
  li.appendChild(deleteBtn);
  return li;
}

// === Add task ===
function addTask(){

  const taskText=inputTask.value.trim();
  
  if(taskText==="")return;

  const li =createElementTask(taskText);

  saveTask(taskText);

  listTask.appendChild(li);

  taskText.value="";
}

// STORAGE FUNCTION 
function saveTask(){
  
}