// Visualize in the browser DevTools → Application → Local Storage

import { initialTasks } from "../../initialData.js"

/**
 * Loads the task list from localStorage under the "tasks" key.
 * If no stored tasks exist or parsing fails, initializes localStorage
 * with the default tasks from `initialTasks` and returns them.
 * @returns {Array<Object>} Array of task objects loaded from storage or defaults.
 */
export function loadTasksFromStorage() {
  const stored = localStorage.getItem("tasks");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (err) {
      console.error("Error parsing tasks from localStorage:", err);
    } 
  }

    localStorage.setItem("tasks", JSON.stringify(initialTasks));
return initialTasks;
}

/**
 * Saves the provided task list to localStorage under the "tasks" key.
 * Overwrites any previously stored task data.
 * @param {Array<Object>} tasks - Array of task objects to persist.
 */
export function saveTasksToStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    }   