export function addTasksToLocalStorage(taskList) {
  if (storageAvailable("localStorage")) {
      localStorage.setItem('task', JSON.stringify(taskList));
    } else {
      // Too bad, no localStorage for us
  }
};

export function saveProjectsToStorage(projectList) {
  if (storageAvailable("localStorage")) {
    localStorage.setItem('projects', JSON.stringify(projectList));
  }
};

export function getTasksFromStorage() {
  const storedTaskList = JSON.parse(localStorage.getItem('task'));
  return storedTaskList;
};

export function getProjectsFromStorage() {
  const storedProjectList = JSON.parse(localStorage.getItem('projects'));
  return storedProjectList;
};

function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
};