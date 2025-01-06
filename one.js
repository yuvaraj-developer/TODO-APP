const startAppButton = document.getElementById("startApp");
const tasksDiv = document.getElementById("tasks");

startAppButton.addEventListener("click", () => {
  const tasks = [];
  let isRunning = true;

  while (isRunning) {
    const choice = prompt(
      "Choose an option:\n1. add - Add a task\n2. remove - Remove the first task\n3. list - Show tasks\n4. quit - Exit the app"
    );

    if (choice === "add") {
      const taskToAdd = prompt("Enter the task you want to add:");
      if (taskToAdd) {
        tasks.push(taskToAdd);
        alert(`Task "${taskToAdd}" added!`);
      }
    } else if (choice === "remove") {
      if (tasks.length > 0) {
        const removedTask = tasks.shift();
        alert(`Task "${removedTask}" removed!`);
      } else {
        alert("No tasks to remove!");
      }
    } else if (choice === "list") {
      if (tasks.length > 0) {
        console.log("Your tasks:", tasks);
        alert(`Check console for tasks.`);
      } else {
        alert("No tasks in the list!");
      }
    } else if (choice === "quit") {
      isRunning = false;
      alert("Exiting the app. Bye!");
    } else {
      alert("Invalid choice! Please try again.");
    }

    // Update the tasksDiv with current tasks
    tasksDiv.innerHTML = `<p>Current Tasks:</p><ul>${tasks
      .map((task) => `<li>${task}</li>`)
      .join("")}</ul>`;
  }
});
