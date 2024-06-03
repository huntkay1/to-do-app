import { addTasksToLocalStorage, getTasksFromStorage } from './local-storage.js';
import { taskManager } from './taskUI-manager.js';


const addTaskBttn = document.getElementById("add-task");
const addTaskDialog = document.getElementById("add-task-popup");
const dialogCloseBttn = document.getElementById("close");
const submitBttn = document.getElementById("submit");


class Task {
    constructor(name, description, date, project) {
        this.id = generateUniqueId();
        this.name = name;
        this.description = description;
        this.date = date;
        this.project = project;
        this.complete = "";
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
    const taskList = getTasksFromStorage() || [];
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


//demo task list
const demoTasks = [
    new Task("Sample Task 1", "This is a sample task description.", "2024-05-28", "Default Project"),
    new Task("Sample Task 2", "This is another sample task description.", "2024-06-01", "Default Project"),
    new Task("Sample Task 3", "Yet another sample task description.", "2024-07-15", "Default Project")
];

export function initializeTaskList() {
    let taskList = getTasksFromStorage();
    if (!taskList || taskList.length === 0) {
        addTasksToLocalStorage(demoTasks);
        taskList = demoTasks;
    }
    taskManager(); 
}





