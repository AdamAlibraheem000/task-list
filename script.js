const userInput = document.getElementById("new-task");
const btnSubmit = document.querySelector(".btn-submit");
const newTask = document.querySelector(".task");
const checked = document.querySelector(".fa-square-check");
const unChecked = document.querySelector(".fa-square");
const taskList = document.querySelector('.task-list');



const addNewTask = () =>{
    let input = userInput.value;
    let addTask = document.createElement('p');
    addTask.textContent = input;
    addTask.innerHTML = `${input} <i class=\"fa-regular fa-square\"></i>`

    
    
    taskList.appendChild(addTask);

    userInput.value = " ";
    
}

btnSubmit.addEventListener("click", addNewTask)