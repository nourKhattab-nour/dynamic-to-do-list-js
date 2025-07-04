document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim task text
        const taskText = taskInput.value.trim();
        
        // Check if input is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }
        
        // Create new list item
        const listItem = document.createElement('li');
        
        // Create span for task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);
        
        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        
        // Add click event to remove button
        removeButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });
        
        // Append remove button to list item
        listItem.appendChild(removeButton);
        
        // Append list item to task list
        taskList.appendChild(listItem);
        
        // Clear input field
        taskInput.value = '';
        
        // Focus back to input field
        taskInput.focus();
    }

    // Event listener for add button click
    addButton.addEventListener('click', addTask);
    
    // Event listener for Enter key in input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
