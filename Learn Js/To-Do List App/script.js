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



}