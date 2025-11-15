import { getNewTaskFormValues } from "./tasks/formUtils.js";
import { addNewTask } from "./tasks/taskManager.js";


// Close handler

/**
 * Opens the modal dialog with pre-filled task details.
 * @param {Object} task - The task object to display in the modal.
 */
export function openTaskModal(task) {
  const modal = document.getElementById("task-modal");
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const statusSelect = document.getElementById("task-status");

  titleInput.value = task.title;
  descInput.value = task.description;
  statusSelect.value = task.status;

  modal.showModal();
}

/**
 * Sets up modal close behavior.
 */
export function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");

  closeBtn.addEventListener("click", () => {
    modal.close();
  });
}

// New task handler
export function setupNewTaskModalHandler() {
  const newTaskBtn = document.getElementById("new-task-btn");
  const modal = document.getElementById("new-task-modal");
  const closeBtn = document.getElementById("new-task-close-btn");
  const createBtn = document.getElementById("create-task-btn");
  const form = document.getElementById("new-task-form");
  const statusSelect = document.getElementById("new-task-status");
  
  // Opening the “Add Task” modal
  newTaskBtn.addEventListener("click", () => {
    form.reset();
    statusSelect.value = "todo";
    modal.showModal();
  });

//   New task modal close button
  closeBtn.addEventListener("click", () => {
    modal.close();
  });

// Create task button

  createBtn.addEventListener("click", () => {
    event.preventDefault();
    addNewTask();
  });
}   


 
  