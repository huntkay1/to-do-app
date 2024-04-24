import './style.css';
//import { today } from './today.js';
import todayIconLight from './today-icon-light.png';
import weekIconLight from './week-icon-light.png';
import monthIconLight from './month-icon-light.png';
import allIconLight from './all-icon-light.png';
import melon from './melon-icon.png';

//icons
const melonIcon = new Image(55, 55);
melonIcon.src = melon;
const todayIcon = new Image(35, 35);
todayIcon.src = todayIconLight;
const monthIcon = new Image(35,35);
monthIcon.src = monthIconLight;
const weekIcon = new Image(35,35);
weekIcon.src = weekIconLight;
const allIcon = new Image(35,35);
allIcon.src = allIconLight;

//add logo icon
const logo = document.getElementById("logo");
melonIcon.classList.add("melon-icon");
logo.appendChild(melonIcon);


//add nav1 item titles and icons
const nav1 = document.getElementById("nav-1");

const navItems = {
    Today : todayIcon,
    "This Week" : weekIcon,
    "This Month" : monthIcon,
    "All Tasks" : allIcon
}

// Object.entries(navItems).forEach(([navTitle, icon]) => {
//     const listItem = document.createElement('li');
//         const navItemTitle = document.createElement('p');
//         navItemTitle.innerHTML = navTitle;
//         listItem.classList.add("nav1-item");
//         listItem.classList.add("nav1-item");
//         listItem.appendChild(icon);
//         listItem.appendChild(navItemTitle);
//         nav1.appendChild(listItem);
// })


Object.entries(navItems).forEach(([navTitle, icon]) => {
    const listItem = document.createElement('button');
        const navItemTitle = document.createElement('p');
        navItemTitle.innerHTML = navTitle;
        listItem.classList.add("nav1-item");
        listItem.classList.add("nav1-item");
        listItem.appendChild(icon);
        listItem.appendChild(navItemTitle);
        nav1.appendChild(listItem);
})
