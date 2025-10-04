const taskInput=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");

// Load tasks from localStorage on page load
window.onload=loadTasks;

//Execute function addTask when addBtn is clicked.
addBtn.addEventListener("click",addTask);

function addTask(){
    const taskText=taskInput.value.trim();
    if(taskText==="")
        alert("Please enter a task.");
        return;

        const li =createTaskElement(taskText);
        taskList.appendChild(li);
        saveTask(taskText);
        taskInput.value="";
}
function createTaskElement(taskText){
    
}

