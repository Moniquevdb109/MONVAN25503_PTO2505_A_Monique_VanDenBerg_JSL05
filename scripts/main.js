import { loadTasksFromStorage } from "./utils/localStorage";
import { clearExistingTasks, renderTasks } from "./ui/renderTasks";
import { setupModalCloseHandler, setupNewTaskModalHandler } from "./ui/modalHandlers.js";
import { initialTasks } from "../initialData.js";

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
