import { getFromStorage } from './local-storage';

export function taskManager() {
    const navButtons = [...document.getElementsByClassName("nav-1")];
    const taskUI = document.getElementById("taskUI");

    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {distributeTasks(e)})
    });


    function distributeTasks(e) {
        const buttonName = e.target.name;
        const taskList = getFromStorage();

        if (taskList.length == 0) {
            return
        }

        if (buttonName === "all") {
            createTaskElements(taskList);
        }
    };

    function createTaskElements(taskList) {
        taskList.forEach(task => {
            const taskContainer = document.createElement('div');
            taskContainer.innerHTML = task.name;
            taskUI.appendChild(taskContainer);
        }) 
    }

}





