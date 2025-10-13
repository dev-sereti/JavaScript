// Get references to HTML elements by their IDs

const inputTask=document.getElementById("taskInput");
const btnAdd=document.getElementById("addBtn");
const listTask=document.getElementById("taskList");

function createElementTask(taskText){
  const li=document.createElement("li");
  li.textContent=taskText;
  //when li is clicked
  li.addEventListener("click",()=>{
    li.classList.toggle("completed");
  });


  //Create a delete button

  const deleteBtn=document.createElement("button");
  deleteBtn.textContent="X";
  deleteBtn.className="delete";


  //When the delete btn is clicked.
  deleteBtn.addEventListener("click",(e)=>{
    e.stopPropagation;
    li.remove();
    removeTask(taskText);
  });
  li.appendChild(deleteBtn);
  return li;

}

// === ADD TASK ===

function addTask(){

  const taskText=inputTask.value.trim();

  //Check if taskText if empty
  if(taskText==="")return;

  //Create a new task element
  const li=createElementTask(taskText);

  //Add the new task element to the task list
  listTask.appendChild(li);

  saveTask(taskText); //Save task

  //Clear input after saving
  taskText.value="";
}


