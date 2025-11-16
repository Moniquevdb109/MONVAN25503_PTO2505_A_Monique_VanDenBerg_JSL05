import { loadTasksFromStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import { setupModalCloseHandler, setupNewTaskModalHandler } from "./ui/modalHandlers.js";

// Calls loadTasksFromStorage() → get tasks
// Calls clearExistingTasks() → empty the DOM
// Calls renderTasks(tasks) → display tasks
// Sets up modal event handlers (setupModalCloseHandler(), setupNewTaskModalHandler())

/**
 * Initializes the task board and modal handlers.
 */
function initTaskBoard() {
  const tasks = loadTasksFromStorage();
  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupNewTaskModalHandler();
}

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", initTaskBoard);
