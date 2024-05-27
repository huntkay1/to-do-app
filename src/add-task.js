import { addTasksToLocalStorage } from './local-storage.js';
import { getTasksFromStorage } from './local-storage';
import { taskManager } from './task-manager.js';


const addTaskBttn = document.getElementById("add-task");
const addTaskDialog = document.getElementById("add-task-popup");
const dialogCloseBttn = document.getElementById("close");
const submitBttn = document.getElementById("submit");

const taskList = getTasksFromStorage() || [];

class Task {
    constructor(name, description, date, project) {
        this.id = generateUniqueId();
        this.name = name;
        this.description = description;
        this.date = date;
        this.project = project;
    }
}

//generate unique ID for task
function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

addTaskBttn.addEventListener('click', () => {
    addTaskDialog.showModal();
})
dialogCloseBttn.addEventListener('click', () => {
    addTaskDialog.close();
    document.querySelector('form').reset();
})

submitBttn.addEventListener('click', (ev) => {
    updateTaskList(ev);
})


function updateTaskList(ev) {
    ev.preventDefault();
    addTaskDialog.close();
    const task = new Task(
        document.getElementById("task").value,
        document.getElementById("description").value,
        document.getElementById("date").value,
        document.getElementById("form-select").value,
    )
    taskList.push(task);
    document.querySelector('form').reset();

    addTasksToLocalStorage(taskList);
    taskManager();
}




