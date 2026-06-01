async function searchMovies(query, page = 1) {
    showLoading(true);
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&page=${page}&apikey=YOUR_KEY`);
    const data = await response.json();
    renderMovies(data.Search);
    showLoading(false);
}

// --- 1. Debounce Function ---
// Trì hoãn việc gọi hàm đến khi người dùng ngừng gõ 500ms
function debounce(func, delay = 500) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
}

// --- 2. Xử lý Search với Debounce ---
const movieInput = document.getElementById('movieInput');

const handleSearch = debounce(async (e) => {
    const query = e.target.value.trim();
    if (query.length > 2) {
        await searchMovies(query); // Gọi hàm search bạn đã làm ở bước 2
    }
}, 500);

movieInput.addEventListener('input', handleSearch);

// --- 3. Hiển thị Modal chi tiết ---
const movieGrid = document.getElementById('movieGrid');

movieGrid.addEventListener('click', async (e) => {
    const card = e.target.closest('.movie-card'); // Tìm card phim
    if (!card) return;

    const movieId = card.dataset.id;
    // Gọi API để lấy chi tiết phim theo ID
    const response = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=YOUR_KEY`);
    const movie = await response.json();
    
    showModal(movie); // Hàm hiển thị modal của bạn
});