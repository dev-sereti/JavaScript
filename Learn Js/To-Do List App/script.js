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
        removeTask(taskText);
    });
    li.appendChild(deleteBtn);
    return li;

}

