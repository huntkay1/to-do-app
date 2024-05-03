import './style.css';
import melon from './melon-icon.png';

let module = require('./add-project.js');
let projectNames = module.projectNames;

//add logo icon
const melonIcon = new Image(55, 55);
melonIcon.src = melon;
const logo = document.getElementById("logo");
melonIcon.classList.add("melon-icon");
logo.appendChild(melonIcon);


const dynamicNavButtons = [...document.getElementsByClassName('nav-1')];
const addTaskBttn = document.getElementById("add-task");
const addTaskDialog = document.getElementById("add-task-popup");
const dialogCloseBttn = document.getElementById("close");
const nav2 = document.getElementById("nav-2");

dynamicNavButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        changeTab(e)
    });
})

const changeTab = (e) => {
    dynamicNavButtons.forEach(button => {
        if (button.classList.contains("active")) {
            button.classList.remove("active");
        }
    })
    var activeTab = e.target;
    console.log(activeTab.firstChild);
    activeTab.classList.add("active");
}

addTaskBttn.addEventListener('click', () => {
    addTaskDialog.showModal();
})
dialogCloseBttn.addEventListener('click', () => {
    addTaskDialog.close();
    document.querySelector('form').reset();
})

projectNames.map(projName => console.log(projName))




