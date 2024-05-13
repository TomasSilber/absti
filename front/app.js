// Función para agregar una tarea
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Eliminar</button>
        `;
        taskList.appendChild(li);

        // Limpiar el campo de entrada
        input.value = '';
    } else {
        alert('Por favor, ingresa una tarea válida.');
    }
}

// Función para eliminar una tarea
function deleteTask(btn) {
    const li = btn.parentNode;
    const taskList = li.parentNode;
    taskList.removeChild(li);
}
