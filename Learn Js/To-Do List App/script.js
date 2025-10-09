// Get references to HTML elements by their IDs

const inputTask=document.getElementById("taskInput");
const btnAdd=document.getElementById("addBtn");
const listTask=document.getElementById("taskList");

// ==== CREATE TASK ELEMENT ===

function createTaskElement(textTask){
  const li=document.createElement("li");
  li.textContent=inputTask.value.trim();

  li.addEventListener("click",()=>{
    li.classList.toggle("completed")
  });

  deleteBtn=document.createElement("button");
  deleteBtn.textContent="X"
  deleteBtn.className="delete";

  deleteBtn.addEventListener("click",(e)=>{
    e.stopPropagation;
    removeTask(textTask);
  });
  li.appendChild(deleteBtn);
  return li;

}
// == ADD TASK ===

function addTask(){
  const textTask=inputTask.value.trim();
}

