import { initialTasks } from "../initialData.js";



// Calls loadTasksFromStorage() → get tasks
// Calls clearExistingTasks() → empty the DOM
// Calls renderTasks(tasks) → display tasks
// Sets up modal event handlers (setupModalCloseHandler(), setupNewTaskModalHandler())


/**
 * Initializes the task board and modal handlers.
 */
function initTaskBoard() {
  clearExistingTasks();
  renderTasks(initialTasks);
  setupModalCloseHandler();
}

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", initTaskBoard);
