const projectNameInput = document.getElementById("add-project");
const addProjSubmit = document.getElementById("add-proj-submit");

let projectNames = ["Hello"];

addProjSubmit.addEventListener('click', addProjectName);

projectNameInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        e.target.blur();
        addProjectName();
    }
})

function addProjectName() {
    projectNames.push(projectNameInput.value);
    projectNameInput.value = "";
}

export { projectNames }




