import { projectNames } from './add-project.js'
import { addToLocalStorage } from './local-storage.js';

const addTaskBttn = document.getElementById("add-task");
const addTaskDialog = document.getElementById("add-task-popup");
const dialogCloseBttn = document.getElementById("close");
const selectInput = document.getElementById("form-select");
const submitBttn = document.getElementById("submit");

export const taskList = [];

class Task {
    constructor(name, description, date, project) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.project = project;
    }
}

addTaskBttn.addEventListener('click', () => {
    addTaskDialog.showModal();
    updateSelectOptions();
})
dialogCloseBttn.addEventListener('click', () => {
    addTaskDialog.close();
    document.querySelector('form').reset();
})

submitBttn.addEventListener('click', (ev) => {
    updateTaskList(ev) 
} )

function updateSelectOptions() {
    projectNames.forEach(projName => {
        const option = document.createElement('option');
        option.innerHTML = projName;
        selectInput.appendChild(option);
    })
}

function updateTaskList(ev) {
    addTaskDialog.close();
    ev.preventDefault();
    const task = new Task(
         document.getElementById("task").value,
         document.getElementById("description").value,
         document.getElementById("date").value,
         document.getElementById("project").value,
    )
    taskList.push(task);
    document.querySelector('form').reset();
    
    addToLocalStorage(taskList);
}







