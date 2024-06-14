document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', addTodo);

    function addTodo() {
        const task = input.value.trim();
        if (task !== '') {
            const li = document.createElement('li');
            li.textContent = task;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => {
                li.remove();
            });

            li.appendChild(deleteBtn);
            todoList.appendChild(li);
            input.value = '';
            input.focus();
        }
    }
});