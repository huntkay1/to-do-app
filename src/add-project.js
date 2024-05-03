const projectNameInput = document.getElementById("add-project");
const addProjSubmit = document.getElementById("add-proj-submit");

const projectNames = [];

addProjSubmit.addEventListener('click', addProjectName);

projectNameInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addProjectName();
    }
})

function addProjectName() {
    projectNames.push(projectNameInput.value);
    projectNameInput.value = "";
    console.log(projectNames);
}

export { projectNames }




