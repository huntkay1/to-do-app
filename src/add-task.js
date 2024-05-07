import { projectNames } from './add-project.js'


const addTaskBttn = document.getElementById("add-task");
const addTaskDialog = document.getElementById("add-task-popup");
const dialogCloseBttn = document.getElementById("close");
const selectInput = document.getElementById("form-select");


addTaskBttn.addEventListener('click', () => {
    addTaskDialog.showModal();
    updateSelectOptions();
})
dialogCloseBttn.addEventListener('click', () => {
    addTaskDialog.close();
    document.querySelector('form').reset();
})

function updateSelectOptions() {
    projectNames.forEach(projName => {
        const option = document.createElement('option');
        option.innerHTML = projName;
        selectInput.appendChild(option);
    })
}

