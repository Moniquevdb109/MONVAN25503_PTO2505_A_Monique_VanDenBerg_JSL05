import { loadTasksFromStorage, saveTasksToStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import { resetForm } from "./formUtils.js";

// add new task logic:
// in short: read the form inputs -> create task obj (+add to existing) -> save updated to local storage -> clear & re-render -> reset & close modal

// 1. Read input values from the new task form.

export function getNewTaskFormValues() {
  const titleInput = document.getElementById("new-task-title");
  const descInput = document.getElementById("new-task-desc");
  const statusSelect = document.getElementById("new-task-status");
  
  return {
    title: titleInput.value.trim(),
    description: descInput.value.trim(),
    status: statusSelect.value,
  };
}

// 2. Create a new task object

export function addNewTask() {
  const { title, description, status } = getNewTaskFormValues();

  if (!title) {
    alert("Task title cannot be empty.");
    return;
  }

  const tasks = loadTasksFromStorage();
  const newTask = {
    id: Date.now(),
    title,
    description,
    status,
  };

  const updatedTasks = [...tasks, newTask];


    saveTasksToStorage(updatedTasks);
    clearExistingTasks();
    renderTasks(updatedTasks);
    resetForm();

    const modal = document.getElementById("new-task-modal");
  if (modal) {
    modal.close();
  }
}



