document.getElementById('add-task-button').addEventListener('click', addTask);
document.getElementById('theme-toggle').addEventListener('click' , addTask);

function addTask(){
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
     
    if(taskInput.ariaValueMax.trim() !== ''){
        const newTask = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value ;
        taskText.addEventListener('click', function(){
            taskText.classList.toggle('completed');
        });
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function(){
            taskList.removeChild(newTask);
        });
        newTask.appendChild(taskText);
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}
 function toggleTheme(){
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme')
 }




