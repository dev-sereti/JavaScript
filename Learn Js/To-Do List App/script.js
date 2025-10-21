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
  
  // get tasks from localStorage

  let tasks=JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks",JSON.stringify(tasks));
}
function removeTask(taskText){
  let tasks=JSON.parse(localStorage.getItem("tasks")) || []; //get tasks from localStorage
  tasks=tasks.filter(task=> task !==taskText);  // Keep all except the one clicked
  localStorage.setItem("tasks",JSON.stringify(tasks));
}

// Load all saved tasks when the page is opened
 function loadTasks(){
  let tasks=JSON.parse(localStorage.getItem("tasks")) || []; //get tasks from localStorage
  tasks.forEach(taskText =>{ // For each task text
    const li= createTaskElement(taskText);
    listTask.appendChild(li);
  });
 }