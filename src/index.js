import './style.css';
import melon from './melon-icon.png';
import './add-project.js';
import './add-task.js';
import './task-manager.js';
import { getUpdatedNavButtonList } from './add-project.js';
import { getFromStorage } from './local-storage';
import { taskManager } from './task-manager.js';


document.addEventListener('DOMContentLoaded', () => {
    const storedTaskList = getFromStorage();
    if (storedTaskList) {
        taskManager();
    }
});


//add logo icon
const melonIcon = new Image(48, 48);
melonIcon.src = melon;
const logo = document.getElementById("logo");
melonIcon.classList.add("melon-icon");
logo.appendChild(melonIcon);

const navButtons = getUpdatedNavButtonList();


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
    const header = document.createElement("h2");
    header.classList.add('task-container-header');
    header.innerHTML = buttonName;
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











