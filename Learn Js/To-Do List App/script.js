const taskInput=document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList=document.getElementById("taskList");

// Add Task
function addTask(){
    const taskText=taskInput.value.trim();

    //Check if the input is empty
    if(taskText==="")return;

    const li=createElement(taskText);
    taskList.appendChild(li);
    saveTask(taskText);
    taskInput.value="";
    
}

// Create Element.
function createElement(){

}

