const taskInput=document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList=document.getElementById("taskList");

// Add Task
function addTask(){
    //Get the text from the input field
    const taskText=taskInput.value.trim();

    //Check if the input is empty
    if(taskText==="")return;

    //Create a new task <li> element
    const li = createTaskElement(taskText);

    taskList.appendChild(li);//Add the task to the task list
    saveTask(taskText);//Save the task to localStorage
    taskInput.value="";//Clear the input field
    
}

// Create Element.
function createTaskElement(){
    const li=document.createElement("li");//Create a new <li> element
    li.textContent=taskText;

    li.addEventListener("click",()=>{
        li.classList.toggle("completed");
    });

}

