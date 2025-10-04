const taskInput=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");

// Load tasks from localStorage on page load
window.onload=loadTasks;

addBtn.addEventListener("click",addTask);

function addTask(){
    const taskText=taskInput.value.trim();
}

