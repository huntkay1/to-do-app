let projectNames = [];

const nav2 = document.getElementById("nav-2");
const projectNameInput = document.getElementById("add-project");
const addProjSubmit = document.getElementById("add-proj-submit");

addProjSubmit.addEventListener('click', addProjectNametoArray);

projectNameInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        e.target.blur();
        addProjectNametoArray();
    }
})

function addProjectNametoArray() {
    projectNames.push(projectNameInput.value);
    projectNameInput.value = "";
    updateProjectListUI();

}

function updateProjectListUI() {
    projectNames.map(projName => {
        const projectListItem = document.createElement('li');
        const projectBttn = document.createElement('button');
        const bttnName = document.createElement('p');

        bttnName.innerHTML = projName;
        projectBttn.appendChild(bttnName);
        projectListItem.appendChild(projectBttn);
        projectBttn.classList.add("nav2-item");
        nav2.appendChild(projectListItem);
    }
    )
}




