import { loadTasksFromStorage, saveTasksToStorage } from "../utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "../ui/render.js";
import { resetForm } from "./formUtils.js";

// in short: read the form inputs -> create task obj (+add to existing) -> save updated to local storage -> clear & re-render -> reset & close modal

/**
 * Reads values from the "new task" form.
 * Grabs title, description, and status from the inputs.
 * @returns {{title: string, description: string, status: string}}
 */

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

/**
 * Creates and saves a new task based on the "new task" form values.
 * Validates the title, updates local storage, re-renders the task list,
 * resets the form, and closes the new task modal.
 * Shows an alert and aborts if the title is empty.
 * @returns {void} 
 */

export function addNewTask() {
  const { title, description, status } = getNewTaskFormValues();

  if (!title) {
    alert("Task title cannot be empty.");
    return; // stops code from running further if no title is provided
  }

  const tasks = loadTasksFromStorage(); // existing tasks
  const newTask = { // create new task object
    id: Date.now(),
    title,
    description,
    status,
  };

  const updatedTasks = [...tasks, newTask]; // add new task to existing tasks


    saveTasksToStorage(updatedTasks); // save updated tasks to local storage  
    clearExistingTasks(); // clear current task display
    renderTasks(updatedTasks); // re-render tasks with updated list
    resetForm(); // reset the new task form

    const modal = document.getElementById("new-task-modal");
  if (modal) {
    modal.close(); // finds modal -> if open -> close it
  }
}



