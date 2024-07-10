document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

const form = document.getElementById('create-task-form')
form.addEventListener('submit', function(e){
  e.preventDefault()
  
})

const taskInput = document.getElementById('new-task-description');
const taskDescription = taskInput.value;