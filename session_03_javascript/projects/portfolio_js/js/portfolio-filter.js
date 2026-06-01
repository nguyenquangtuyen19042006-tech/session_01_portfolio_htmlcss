// [FEATURE] Handle filter buttons
const buttons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.portfolio-item');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Xóa class active ở tất cả các nút
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Logic ẩn hiện
        const filter = btn.getAttribute('data-filter');
        items.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block'; // Hoặc class .show
            } else {
                item.style.display = 'none'; // Hoặc class .hide
            }
        });
    });
});