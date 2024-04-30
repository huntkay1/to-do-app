import './style.css';
import melon from './melon-icon.png';



//add logo icon
const melonIcon = new Image(55, 55);
melonIcon.src = melon;
const logo = document.getElementById("logo");
melonIcon.classList.add("melon-icon");
logo.appendChild(melonIcon);


const dynamicNavButtons = [...document.getElementsByClassName('nav-1')];
const addTaskBttn = document.getElementById("add-task");
const dialog = document.querySelector("dialog");
const dialogCloseBttn = document.getElementById("close");

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
    dialog.showModal();
})
dialogCloseBttn.addEventListener('click', () => {
    dialog.close();
    document.querySelector('form').reset();
})