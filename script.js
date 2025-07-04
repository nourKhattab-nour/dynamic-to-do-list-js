document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task (EXACT implementation as per requirements)
    function addTask() {
        // Get and trim task text
        const taskText = taskInput.value.trim();
        
        // Check if input is empty and show alert as required
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }
        
        // Create new list item and set its text content
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        // Create remove button with required properties
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn'; // Using className instead of classList.add
        
        // Assign onclick event to remove button (as specified)
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        
        // Append elements exactly as required
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        
        // Clear input field
        taskInput.value = '';
    }

    // Event listeners
    addButton.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
