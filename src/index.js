import './style.css';
import melon from './melon-icon.png';
import './project-manager.js';
import './add-task.js';
import './taskUI-manager.js';
import { getUpdatedNavButtonList } from './project-manager.js';
import { getTasksFromStorage } from './local-storage';
import { getProjectsFromStorage } from './local-storage';
import { taskManager } from './taskUI-manager.js';
import { updateProjectListUI, updateSelectOptions } from './project-manager.js';

//add logo icon
const melonIcon = new Image(45, 45);
melonIcon.src = melon;
const logo = document.getElementById("logo");
melonIcon.classList.add("melon-icon");
logo.appendChild(melonIcon);

const navButtons = getUpdatedNavButtonList();

//display items saved in storage
document.addEventListener('DOMContentLoaded', () => {
    const storedTaskList = getTasksFromStorage();
    const storedProjectList = getProjectsFromStorage();
    if (storedTaskList) {
        taskManager();
    }
    if (storedProjectList) {
        updateProjectListUI();
        updateSelectOptions();
    }
});

navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        changeTabActiveStatus(e)
        var buttonName = button.name;
        displayHeader(buttonName);
    });
})

export function displayHeader(buttonName) {
    const taskUI = document.getElementById("taskUI");
    taskUI.innerHTML = "";
    const header = document.createElement('div');
    header.classList.add('taskUI-header');
    const headerName = document.createElement("h2");
    headerName.classList.add('taskUI-header-name');
    headerName.innerHTML = buttonName;
    header.appendChild(headerName);
    taskUI.appendChild(header);

}

const changeTabActiveStatus = (e) => {
    navButtons.forEach(button => {
        if (button.classList.contains("active")) {
            button.classList.remove("active");
        }
    })
    var activeTab = e.target;
    activeTab.classList.add("active");
}









