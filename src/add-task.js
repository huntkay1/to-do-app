import { addToLocalStorage } from './local-storage.js';
import { taskManager } from './task-manager.js';

const taskList = [];

const addTaskBttn = document.getElementById("add-task");
const addTaskDialog = document.getElementById("add-task-popup");
const dialogCloseBttn = document.getElementById("close");
const submitBttn = document.getElementById("submit");

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
})
dialogCloseBttn.addEventListener('click', () => {
    addTaskDialog.close();
    document.querySelector('form').reset();
})

submitBttn.addEventListener('click', (ev) => {
    updateTaskList(ev);
    addToLocalStorage(taskList);
    taskManager();
})


function updateTaskList(ev) {
    addTaskDialog.close();
    ev.preventDefault();
    const task = new Task(
        document.getElementById("task").value,
        document.getElementById("description").value,
        document.getElementById("date").value,
        document.getElementById("form-select").value,
    )
    taskList.push(task);
    document.querySelector('form').reset();
}



export { taskList }


