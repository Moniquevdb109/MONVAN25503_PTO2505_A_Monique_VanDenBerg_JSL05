// Visualize in the browser DevTools → Application → Local Storage

import { initialTasks } from "../../initialData.js"

// Load task data from local storage or initialize with default tasks.

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

// Save task data to local storage.

export function saveTasksToStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    }   