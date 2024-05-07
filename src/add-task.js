import { projectNames } from './add-project.js'


const addTaskBttn = document.getElementById("add-task");
const addTaskDialog = document.getElementById("add-task-popup");
const dialogCloseBttn = document.getElementById("close");
const selectInput = document.getElementById("form-select");
const submitBttn = document.getElementById("submit");

const taskList = [];

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

    if (storageAvailable("localStorage")) {
        localStorage.setItem('task', JSON.stringify(taskList));
      } else {
        // Too bad, no localStorage for us
    }

    const storedTask = localStorage.getItem('task');
    console.log(JSON.parse(storedTask));
}

function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }





