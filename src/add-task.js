const addTaskBttn = document.getElementById("add-task");
const addTaskDialog = document.getElementById("add-task-popup");
const dialogCloseBttn = document.getElementById("close");

addTaskBttn.addEventListener('click', () => {
    addTaskDialog.showModal();
})
dialogCloseBttn.addEventListener('click', () => {
    addTaskDialog.close();
    document.querySelector('form').reset();
})
