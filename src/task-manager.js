import { getTasksFromStorage } from './local-storage';
import { displayHeader } from "./index.js";
import { getUpdatedNavButtonList } from './add-project.js';
import { isToday, parseISO, format, isThisISOWeek, isThisMonth } from 'date-fns';

export function taskManager() {

    const navButtons = getUpdatedNavButtonList();

    navButtons.forEach(button => {
        //this will automatically display newly created task to the active page
        if (button.classList.contains('active')) {
            distributeTasks(button.name);
        }
    });

    document.body.addEventListener('click', (e) => {
        let button = e.target;
        let buttonName = button.name;
        if (button.classList.contains("nav-button")) {
            distributeTasks(buttonName, button)
        }
    })

}

export function distributeTasks(buttonName, button) {
        
    const taskList = getTasksFromStorage();
    taskList.sort(function(a,b){
        return new Date(a.date) - new Date(b.date);
    })

    if (buttonName === "All Tasks") {
        createTaskElements(taskList, buttonName);
    } else if (buttonName === "Today") {
        var todayTaskList = taskList.filter(task => {
            date = parseISO(task.date);
            if (isToday(date)) {
                return task;
            }
        })
        createTaskElements(todayTaskList, buttonName);
    } else if (buttonName === "This Week") {
        var weekTaskList = taskList.filter(task => {
            date = parseISO(task.date);
            if (isThisISOWeek(date)) {
                return task;
            }
        })
        createTaskElements(weekTaskList, buttonName);
    } else if (buttonName === "This Month") {
        var monthTaskList = taskList.filter(task => {
            date = parseISO(task.date);
            if (isThisMonth(date)) {
                return task;
            }
        })
        createTaskElements(monthTaskList, buttonName);
    } else if (buttonName === "Project") {
        var projectName = button.textContent;
        var projectTaskList = taskList.filter(task => {
            if (task["project"] === projectName) {
                return task;
            }
        })
        createTaskElements(projectTaskList, projectName);
    }
};

export function createTaskElements(taskList, buttonName) {

    const taskUI = document.getElementById("taskUI");
        
    taskUI.innerHTML = "";
    displayHeader(buttonName);

    taskList.forEach(task => {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-item');
        const taskLeft = document.createElement('div');
        taskLeft.classList.add('task-left');
        const taskRight = document.createElement('div');
        taskRight.classList.add('task-right');
        const taskIcons = document.createElement('div');
        taskIcons.classList.add('task-icons');

        const checkbox = document.createElement('button');
        checkbox.classList.add('task-checkbox');
        const taskName = document.createElement('p');
        taskName.classList.add('task-name');
        taskLeft.appendChild(checkbox);
        taskLeft.appendChild(taskName);

        const taskDate = document.createElement('p');
        taskDate.classList.add('date');
        taskRight.appendChild(taskDate);

        const trashIcon = document.createElement('div');
        trashIcon.innerHTML = '<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="Edit / Edit_Pencil_02"> <path id="Vector" d="M4 16.0001V20.0001L8 20.0001L18.8686 9.13146L18.8695 9.13061C19.265 8.73516 19.4628 8.53736 19.5369 8.3092C19.6021 8.10835 19.6022 7.89201 19.5369 7.69117C19.4627 7.46284 19.2646 7.26474 18.8686 6.86872L17.1288 5.12892C16.7345 4.7346 16.5369 4.53704 16.3091 4.46301C16.1082 4.39775 15.8919 4.39775 15.691 4.46301C15.463 4.53709 15.2652 4.73488 14.8704 5.12976L14.8686 5.13146L4 16.0001Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>'
        const editIcon = document.createElement('div');
        editIcon.innerHTML = '<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        taskIcons.appendChild(trashIcon);
        taskIcons.appendChild(editIcon);
        taskRight.appendChild(taskIcons);

        taskContainer.appendChild(taskLeft);
        taskContainer.appendChild(taskRight);

        taskName.innerHTML = task.name;
        const formattedDate = format(parseISO(task.date), 'MM/dd/yyyy');
        taskDate.innerHTML = formattedDate;

        taskUI.appendChild(taskContainer);
    }) 
}





