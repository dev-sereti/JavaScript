// Get references to HTML elements by their IDs

const inputTask=document.getElementById("taskInput");
const btnAdd=document.getElementById("addBtn");
const listTask=document.getElementById("taskList");

// ==== CREATE TASK ELEMENT ===

function createTaskElement(textTask){
const li =document.createElement("li");
li.textContent=inputTask.value;

li.addEventListener("click",()=>{
  li.classList.toggle("completed");
});

deleteBtn=document.createElement("button");
deleteBtn.textContent="X";
deleteBtn.className="delete";




}
// == ADD TASK ===

function addTask(){
  const textTask=inputTask.value.trim();
}

