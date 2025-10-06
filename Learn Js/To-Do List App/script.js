const taskInput=document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList=document.getElementById("taskList");

// Load tasks from localStorage on page load
window.onload = loadTasks;

addBtn.addEventListener("click", addTask);

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
    li.textContent=taskText;//Insert the task text

    //Add a click event listener
    li.addEventListener("click",()=>{
        li.classList.toggle("completed");//Whenever the user clicks on this list item, toggle the CSS class completed
    });

    const deleteBtn=document.createElement("Button");//Create a delete button
    deleteBtn.textContent="X";
    deleteBtn.className="delete";

    //Add click functionality
    deleteBtn.addEventListener("click",(e)=>{
        e.stopPropagation();// Prevent triggering complete toggle
        li.remove();//Removes the whole <li> element (the task) from the page
        removeTask(taskText);//Calls a function to also delete the task from localStorage
    });
    li.appendChild(deleteBtn);//Attach the button to the task
    return li;//Return the final <li>
}
// Save to localStorage
function saveTask(){
    let tasks=JSON.parse(localStorage.getItem("tasks")) || [];//Get existing tasks from localStorage
    //Appends the new task (a string) to the list of tasks.
    tasks.push(taskText); //Add the new task to the array
    localStorage.setItem("tasks",JSON.stringify(tasks)); //Save the updated array back to localStorage
}
// Remove from localStorage

function removeTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Load tasks on page load

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(taskText => {
    const li = createTaskElement(taskText);
    taskList.appendChild(li);
  });
}



