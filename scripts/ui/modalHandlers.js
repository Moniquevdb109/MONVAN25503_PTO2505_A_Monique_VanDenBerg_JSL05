import { addNewTask } from "../tasks/taskManager.js";
import { resetForm } from "../tasks/formUtils.js";

/**
 * Opens the modal dialog with pre-filled task details.
 * @param {Object} task - The task object to display in the modal.
 */
export function openTaskModal(task) {
  const modal = document.getElementById("task-modal"); // finds modal, then title, disc, status inputs
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const statusSelect = document.getElementById("task-status");

  titleInput.value = task.title; // finds the above inputs and fills them with task data
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

/**
 * Sets up event listeners for the "New Task" modal.
 * Handles opening and closing the modal, resetting the form,
 * setting the default status to "todo", and creating a new task
 * when the user clicks the "Create task" button.
 */
export function setupNewTaskModalHandler() {
  const newTaskBtn = document.getElementById("new-task-btn"); //all the variables -> finds the elements in modal
  const modal = document.getElementById("new-task-modal");
  const closeBtn = document.getElementById("new-task-close-btn");
  const createBtn = document.getElementById("create-task-btn");
  const form = document.getElementById("new-task-form");
  const statusSelect = document.getElementById("new-task-status");
  
  // Opening the “Add Task” modal
  newTaskBtn.addEventListener("click", () => { //when clicked -> reset firm -> add selected status value -> open modal
    form.reset();
    statusSelect.value = "todo";
    modal.showModal();
  });

//   New task modal close button
  closeBtn.addEventListener("click", () => {
    modal.close();
  });

// Create task button
  createBtn.addEventListener("click", (event) => {
    event.preventDefault(); // stops form from submitting normally, default behaviour will refresh page
    addNewTask();
  });
}   


 
  