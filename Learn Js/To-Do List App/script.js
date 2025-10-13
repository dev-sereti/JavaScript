// Get references to HTML elements by their IDs

const inputTask=document.getElementById("taskInput");
const btnAdd=document.getElementById("addBtn");
const listTask=document.getElementById("taskList");

function createElementTask(taskText){
  const li=document.createElement("li");
  li=inputTask.value.trim();


  //Create a delete button

  const deleteBtn=document.createElement("button");
  deleteBtn.textContent="X";
  deleteBtn.className="delete";
}

