document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when page loads
    loadTasks();

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        storedTasks.forEach(taskText => {
            createTaskElement(taskText, false);
        });
    }

    // Function to create task element (separated for reusability)
    function createTaskElement(taskText, saveToStorage = true) {
        // Create new list item and set its text content
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        
        // Add click event to remove button
        removeButton.addEventListener('click', function() {
            // Remove from DOM
            taskList.removeChild(listItem);
            // Remove from Local Storage
            updateLocalStorage(taskText, true);
        });
        
        // Append elements
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Save to Local Storage if needed
        if (saveToStorage) {
            updateLocalStorage(taskText);
        }
    }

    // Function to update Local Storage
    function updateLocalStorage(taskText, remove = false) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        if (remove) {
            tasks = tasks.filter(task => task !== taskText);
        } else if (!tasks.includes(taskText)) {
            tasks.push(taskText);
        }
        
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a new task
    function addTask() {
        // Get and trim task text
        const taskText = taskInput.value.trim();
        
        // Check if input is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }
        
        // Create task element
        createTaskElement(taskText);
        
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
