document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

const form = document.getElementById('create-task-form');
form.addEventListener('submit', function(e){
  e.preventDefault() // prevents the form from submitting
  
})

// Gets the task description input value
const taskInput = document.getElementById('new-task-description');
const taskDescription = taskInput.value;

 // Creates a new <li> element with the task description
const taskItem = document.createElement("li");
taskItem.textContent = taskDescription;

//append the task item to the ul
const taskList = document.getElementById('tasks');
taskList.appendChild(taskItem);