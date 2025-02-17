let taskId = 1;
        let tasks = [
            { id: taskId++, description: "Comprar pan", completed: false },
            { id: taskId++, description: "Hacer ejercicio", completed: true },
            { id: taskId++, description: "Leer un libro", completed: false }
        ];
        
        function renderTasks() {
            const taskList = document.getElementById("taskList");
            taskList.innerHTML = "";
            
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? 'checked' : ''}>
                    <span class="${task.completed ? 'completed' : ''}"> ${task.id} ${task.description} </span>
                    <button onclick="deleteTask(${index})">Eliminar</button>
                `;
                taskList.appendChild(li);
            });
            updateSummary();
        }
        
        function addTask() {
            const taskInput = document.getElementById("taskInput");
            if (taskInput.value.trim() !== "") {
                tasks.push({ id: taskId++, description: taskInput.value, completed: false });
                taskInput.value = "";
                renderTasks();
            }
        }
        
        function deleteTask(index) {
            tasks.splice(index, 1);
            renderTasks();
        }
        
        function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        }
        
        function updateSummary() {
            document.getElementById("totalTasks").textContent = tasks.length;
            document.getElementById("completedTasks").textContent = tasks.filter(task => task.completed).length;
        }
        
        renderTasks();