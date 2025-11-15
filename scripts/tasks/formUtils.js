
// Get values from the form and create a new task object

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

// Reset the form

export function resetForm() {
  const form = document.getElementById("new-task-form");
  form.reset();
}