
import { getTasksFromStorage, addTasksToLocalStorage } from './local-storage.js';
import { displayHeader } from "./index.js";
import { getUpdatedNavButtonList, removeProject } from './project-manager.js';
import { isToday, parseISO, format, isThisISOWeek, isThisMonth } from 'date-fns';

export function taskManager() {

    const navButtons = getUpdatedNavButtonList();

    navButtons.forEach(button => {
        //this will automatically display newly created task to the active page
        if (button.classList.contains('active')) {
            distributeTasks(button.name);
        };
    });

    document.body.addEventListener('click', (e) => {
        let button = e.target;
        let buttonName = button.name;
        if (button.classList.contains("nav-button")) {
            distributeTasks(buttonName, button)
        };
    });
};

export function distributeTasks(buttonName, button) {
        
    const taskList = getTasksFromStorage();
    taskList.sort(function(a,b){
        return new Date(a.date) - new Date(b.date);
    });

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
        addDeleteProjectButton();
    };
};

export function createTaskElements(taskList, buttonName) {

    const taskUI = document.getElementById("taskUI");
        
    taskUI.innerHTML = "";
    displayHeader(buttonName);

    taskList.forEach(task => {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-item');
        const collapsedTaskInfo = document.createElement('div');
        collapsedTaskInfo.classList.add('collapsed-task-info');
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
        const editIcon = document.createElement('div');
        const expandIcon = document.createElement('div');
        editIcon.innerHTML = '<svg class="edit-icon" width="20px" height="20px" viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg"> <g id="Edit / Edit_Pencil_02"> <path id="Vector" d="M4 16.0001V20.0001L8 20.0001L18.8686 9.13146L18.8695 9.13061C19.265 8.73516 19.4628 8.53736 19.5369 8.3092C19.6021 8.10835 19.6022 7.89201 19.5369 7.69117C19.4627 7.46284 19.2646 7.26474 18.8686 6.86872L17.1288 5.12892C16.7345 4.7346 16.5369 4.53704 16.3091 4.46301C16.1082 4.39775 15.8919 4.39775 15.691 4.46301C15.463 4.53709 15.2652 4.73488 14.8704 5.12976L14.8686 5.13146L4 16.0001Z" stroke="#282828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';
        trashIcon.innerHTML = '<svg class="trash-icon" width="20px" height="20px" viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" stroke="#282828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        expandIcon.innerHTML = '<svg class="expand-icon" fill="#282828" height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/></svg>'
        taskIcons.appendChild(editIcon);
        taskIcons.appendChild(trashIcon);
        taskIcons.appendChild(expandIcon);
        taskRight.appendChild(taskIcons);

        collapsedTaskInfo.appendChild(taskLeft);
        collapsedTaskInfo.appendChild(taskRight);
        taskContainer.appendChild(collapsedTaskInfo);

        taskName.innerHTML = task.name;
        const formattedDate = format(parseISO(task.date), 'MMM dd');
        taskDate.innerHTML = formattedDate;

        // Add description
        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');
        taskDetails.style.display = 'none'; // Initially hidden

        const taskDescription = document.createElement('p');
        taskDescription.classList.add('task-description');
        taskDescription.innerHTML = task.description;

        taskDetails.appendChild(taskDescription);
        taskContainer.appendChild(taskDetails);

        taskUI.appendChild(taskContainer);

        //task icon event listeners
        editIcon.addEventListener('click', (e) => {
            const selectedTask = e.currentTarget.closest('.task-item');
            enterEditMode(selectedTask, task, taskContainer);
        });
        trashIcon.addEventListener('click', (e) => {
            deleteTask(task.id, taskList)
        });
        checkbox.addEventListener('click', (e) => {
            const selectedTask = e.currentTarget.closest('.task-item');
            crossOffTask(selectedTask, checkbox);
        });
        expandIcon.addEventListener('click', (e) => {
            const selectedTask = e.currentTarget.closest('.task-item');
            expandTaskItem(selectedTask, expandIcon, taskContainer, task);
        })
    });
};

function expandTaskItem(selectedTask, expandIcon, taskContainer, task) {
    expandIcon.innerHTML = "";
    const inEditMode = selectedTask.classList.contains("edit-mode");
    const isExpanded = selectedTask.classList.contains('expanded');
    const taskDetails = selectedTask.querySelector('.task-details');
    if (inEditMode) {
        exitEditMode(taskContainer, task, selectedTask)
    };

    if (isExpanded) {
        expandIcon.innerHTML = '<svg fill="#282828" height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/></svg>'
        taskDetails.style.display = 'none';
        selectedTask.classList.remove('expanded');
    } else {
        expandIcon.innerHTML = '<svg fill="#282828" height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/></svg>'
        taskDetails.style.display = 'block';
        selectedTask.classList.add('expanded');
    };
};

function crossOffTask(selectedTask, checkbox) {
    const crossedOff = selectedTask.classList.contains('crossed-off');
    if (crossedOff) {
        selectedTask.classList.remove('crossed-off');
        checkbox.innerHTML = "";
    } else {
        selectedTask.classList.add('crossed-off');
        checkbox.innerHTML = '<svg width="13px" height="13px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#545454"/></svg>'
    };
};

function addDeleteProjectButton() {
    const header = taskUI.firstChild;
    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.classList.add('remove-project');
    deleteProjectButton.innerHTML = 'Remove Project';
    header.appendChild(deleteProjectButton);

    deleteProjectButton.addEventListener('click', (e) => {removeProject(e)});
};

function deleteTask(taskId, taskList) {
    taskList = taskList.filter(task => task.id !== taskId);
    addTasksToLocalStorage(taskList);
    // Redistribute tasks to update the UI
    const activeButton = document.querySelector('.nav-button.active');
    if (activeButton) {
        distributeTasks(activeButton.name, activeButton);
    };
};

function enterEditMode(taskContainer, taskInfo, selectedTask) {
    
    const taskDetails = selectedTask.querySelector('.task-details');
    //turn on edit mode and change display
    selectedTask.classList.add('edit-mode');
    taskDetails.style.display = 'block';

    const taskNameElement = taskContainer.querySelector('.task-name');
    const taskDateElement = taskContainer.querySelector('.date');
    const taskDescriptionElement = taskContainer.querySelector('.task-description');

    taskNameElement.contentEditable = "true";
    taskDescriptionElement.contentEditable = "true";

    // Replace taskDateElement with an input field
    const taskDateInput = document.createElement('input');
    taskDateInput.classList.add('editable-date');
    taskDateInput.type = 'date';
    taskDateInput.value = taskInfo.date; // Set current task date
    taskDateElement.replaceWith(taskDateInput);

    // Check if save button already exists to avoid adding multiple
    let saveButton = taskContainer.querySelector('.save-button');
    if (!saveButton) {
        const editModeButtonContainer = document.createElement('div');
        editModeButtonContainer.classList.add('edit-mode-button-container');

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.classList.add('cancel-button');
        editModeButtonContainer.appendChild(cancelButton);
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.classList.add('save-button');
        editModeButtonContainer.appendChild(saveButton);
    
        taskContainer.appendChild(editModeButtonContainer);

        saveButton.addEventListener('click', () => {
            saveTaskChanges(taskContainer, taskInfo, taskDateInput, selectedTask);
        });

        cancelButton.addEventListener('click', () => {
            exitEditMode(taskContainer, taskInfo, selectedTask);
        });
    };
};

function exitEditMode(taskContainer, taskInfo, selectedTask) {

    const taskDetails = selectedTask.querySelector('.task-details');
    //turn off edit mode and change display
    selectedTask.classList.remove('edit-mode');
    taskDetails.style.display = 'none';

    const taskNameElement = taskContainer.querySelector('.task-name');
    const taskDescriptionElement = taskContainer.querySelector('.task-description');

    taskNameElement.innerHTML = taskInfo.name;
    taskNameElement.contentEditable = "false";
    taskDescriptionElement.contentEditable = "false";

    // Replace date input with text element
    const taskDateInput = taskContainer.querySelector('input[type="date"]');
    const taskDateElement = document.createElement('p');
    taskDateElement.classList.add('date');
    taskDateElement.innerHTML = format(parseISO(taskInfo.date), 'MMM dd');;
    taskDateInput.replaceWith(taskDateElement);

    // Remove the buttons
    const saveButton = taskContainer.querySelector('.save-button');
    const cancelButton = taskContainer.querySelector('.cancel-button');
    saveButton.remove();
    cancelButton.remove();
};

function saveTaskChanges(taskContainer, taskInfo, taskDateInput, selectedTask) {
    const taskNameElement = selectedTask.querySelector('.task-name');
    const taskDescriptionElement = selectedTask.querySelector('.task-description');


    taskInfo.name = taskNameElement.textContent;
    taskInfo.date = taskDateInput.value; // Use value from date input
    taskInfo.description = taskDescriptionElement.textContent;

    const taskList = getTasksFromStorage();
    const taskIndex = taskList.findIndex(task => task.id === taskInfo.id);
    taskList[taskIndex] = taskInfo;
    addTasksToLocalStorage(taskList);

    // Exit edit mode
    exitEditMode(taskContainer, taskInfo, selectedTask);

    taskManager();
};