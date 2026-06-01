// [FEATURE] Xử lý Update (Toggle) và Delete bằng Event Delegation
const todoList = document.getElementById('todoList');

todoList.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    
    const id = Number(li.dataset.id);

    // Xóa todo
    if (e.target.matches('.delete-btn')) {
        if (confirm("Bạn có chắc chắn muốn xóa?")) {
            deleteTodo(id);
        }
    }
    
    // Toggle hoàn thành
    if (e.target.matches('.checkbox')) {
        toggleTodo(id);
    }
});