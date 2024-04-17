import './style.css';
import todayIcon from './today-icon.png';
import melon from './melon-icon.png';

const header = document.querySelector("header");
const melonIcon = new Image(58, 58);
melonIcon.src = melon;
melonIcon.classList.add("melon-icon");

header.appendChild(melonIcon);


// const todayImg = new Image(45, 45);
// todayImg.src = todayIcon;


// let nav1 = document.getElementById("nav-1");
// nav1.appendChild(todayImg);


//its there but its the same color as the background