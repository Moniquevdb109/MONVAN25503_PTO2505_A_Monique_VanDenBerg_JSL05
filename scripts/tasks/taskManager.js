import { loadTasksFromStorage, saveTasksToStorage } from "../utils/localStorage";
import { clearExistingTasks,renderTasks } from "../ui/render";

// add new task logic:


// 1. Read input values from the new task form.

export function getNewTaskFormValues() {
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const statusSelect = document.getElementById("task-status");
  
  return {
    title: titleInput.value.trim(),
    description: descInput.value.trim(),
    status: statusSelect.value,
  };
}

// 2. Create a new task object with a unique id.

// 3. Load existing tasks from localStorage.

// 4. Save the updated tasks back.

// 5. Clear & re-render the board.

// 6. Reset and close the modal.


