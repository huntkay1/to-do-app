import './style.css';
import todayIconLight from './today-icon-light.png';
import weekIconLight from './week-icon-light.png';
import monthIconLight from './month-icon-light.png';
import allIconLight from './all-icon-light.png';
import melon from './melon-icon.png';

//add logo icon
const header = document.querySelector("header");
const melonIcon = new Image(55, 55);
melonIcon.src = melon;
melonIcon.classList.add("melon-icon");
header.appendChild(melonIcon);

const nav1 = document.getElementById("nav-1");

const todayIcon = new Image(35, 35);
todayIcon.src = todayIconLight;



const monthIcon = new Image(35,35);
monthIcon.src = monthIconLight;
const weekIcon = new Image(35,35);
weekIcon.src = weekIconLight;
const allIcon = new Image(35,35);
allIcon.src = allIconLight;


const navItems = {
    Today : todayIcon,
    Week : weekIcon,
    Month : monthIcon,
    All : allIcon
}


Object.entries(navItems).forEach(([navTitle, icon]) => {
    const listItem = document.createElement('li');
        const navItemTitle = document.createElement('p');
        navItemTitle.innerHTML = navTitle;
        listItem.classList.add("nav1-item");
        listItem.classList.add("nav1-item");
        listItem.appendChild(icon);
        listItem.appendChild(navItemTitle);
        nav1.appendChild(listItem);
})



// const todayImg = new Image(45, 45);
// todayImg.src = todayIcon;\


// let nav1 = document.getElementById("nav-1");
// nav1.appendChild(todayImg);


//its there but its the same color as the background