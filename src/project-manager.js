import { displayHeader } from "./index.js";
import { getProjectsFromStorage, saveProjectsToStorage, getTasksFromStorage, addTasksToLocalStorage } from "./local-storage.js";
import { taskManager } from "./taskUI-manager.js";

const projectNames = getProjectsFromStorage() || [];

const nav2 = document.getElementById("nav-2");
const projectNameInput = document.getElementById("add-project");
const addProjSubmit = document.getElementById("add-proj-submit");
const selectInput = document.getElementById("form-select");

addProjSubmit.addEventListener('click', () => {
    if (projectNameInput.value!== '') {
        addProjectNametoArray
    }
})


projectNameInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' & projectNameInput.value!== '') {
        e.preventDefault();
        e.target.blur();
        addProjectNametoArray();
    }
})

function addProjectNametoArray() {
    projectNames.push(projectNameInput.value);
    projectNameInput.value = "";
    saveProjectsToStorage(projectNames);
    updateProjectListUI();
    updateSelectOptions();
}

export function updateProjectListUI() {

    //clear nav2 list before appending to avoid repeats
    while (nav2.childNodes.length > 1) {
        nav2.removeChild(nav2.lastChild);
    };

    //creates project list button
    projectNames.map(projName => {
        const projectListItem = document.createElement('li');
        const projectBttn = document.createElement('button');
        const icon = document.createElement('span');
        icon.name = "Project";
        projectBttn.name = "Project";
        
        projectBttn.innerHTML = projName;
        icon.innerHTML = '<svg id="proj-list-icon" class="proj-bttn" fill="#f0fff0" width="25px" height="25px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M13.293 7.293c-.391.391-.391 1.023 0 1.414l2.293 2.293h-7.586c-.552 0-1 .448-1 1s.448 1 1 1h7.586l-2.293 2.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l4.707-4.707-4.707-4.707c-.391-.391-1.023-.391-1.414 0z"/></svg>';
        projectBttn.appendChild(icon);
        projectListItem.appendChild(projectBttn);
        projectBttn.classList.add("nav2-item");
        projectBttn.classList.add("nav-button");
        nav2.appendChild(projectListItem);

        projectBttn.addEventListener('click', () => {
            displayHeader(projName);
        });

    });

}

export function updateSelectOptions() {

    //prevents repeats
    while (selectInput.childNodes.length > 1) {
        selectInput.removeChild(selectInput.lastChild);
    };

    projectNames.forEach(projName => {
        const option = document.createElement('option');
        option.innerHTML = projName;
        selectInput.appendChild(option);
        
    });
}

export function getUpdatedNavButtonList() {
    const navButtons = [...document.getElementsByClassName("nav-button")];
    return navButtons;
}

export function removeProject(e) {
    var taskList = getTasksFromStorage(); 
    const header = e.currentTarget.parentElement;
    const selectedProjectName = header.firstChild.innerHTML;
    for (var i = projectNames.length - 1; i >= 0; i--) {
        if (projectNames[i] === selectedProjectName) {
            projectNames.splice(i, 1);
        }
    };

    taskList = taskList.filter(task => task.project !== selectedProjectName);
 
   updateProjectListUI();
   updateSelectOptions();
   saveProjectsToStorage(projectNames);
   addTasksToLocalStorage(taskList);
   taskManager();

}

export { projectNames }






