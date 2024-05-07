import './style.css';
import melon from './melon-icon.png';
import './add-project.js';
import './add-task.js';

//add logo icon
const melonIcon = new Image(48, 48);
melonIcon.src = melon;
const logo = document.getElementById("logo");
melonIcon.classList.add("melon-icon");
logo.appendChild(melonIcon);


const dynamicNav1Buttons = [...document.getElementsByClassName('nav-1')];


dynamicNav1Buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        changeTab(e)
    });
})

const changeTab = (e) => {
    dynamicNav1Buttons.forEach(button => {
        if (button.classList.contains("active")) {
            button.classList.remove("active");
        }
    })
    var activeTab = e.target;
    console.log(activeTab.firstChild);
    activeTab.classList.add("active");
}









