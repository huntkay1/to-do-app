import './style.css';
import melon from './melon-icon.png';


//add logo icon
const melonIcon = new Image(55, 55);
melonIcon.src = melon;
const logo = document.getElementById("logo");
melonIcon.classList.add("melon-icon");
logo.appendChild(melonIcon);


const buttons = [...document.querySelectorAll('button')];

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        changeTab(e)
    });
})

const changeTab = (e) => {
    buttons.forEach(button => {
        if (button.classList.contains("active")) {
            button.classList.remove("active");
        }
    })
    var activeTab = e.target;
    console.log(activeTab.firstChild);
    activeTab.classList.add("active");
}
