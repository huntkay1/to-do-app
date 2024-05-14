import { getFromStorage } from './local-storage';

const submitBttn = document.getElementById("submit");

submitBttn.addEventListener('click', () => {
    const taskList = getFromStorage();
    console.log(taskList);
} )

