// [FEATURE] Fetch thời tiết hiện tại
async function fetchWeather(city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`);
    const data = await res.json();
    renderWeather(data);
}


// [FEATURE] Hàm fetch dự báo 5 ngày
async function fetchForecast(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=YOUR_API_KEY`);
        if (!response.ok) throw new Error("Thành phố không tồn tại!");
        
        const data = await response.json();
        // Lọc dữ liệu: API trả về 3 tiếng/lần, lấy mỗi ngày 1 thời điểm (ví dụ: 12:00)
        const forecastList = data.list.filter(item => item.dt_txt.includes("12:00:00"));
        renderForecast(forecastList);
    } catch (error) {
        alert(error.message); // Hiển thị thông báo lỗi
        console.error(error);
    }
}

// [FEATURE] Lưu lịch sử tìm kiếm vào localStorage
function saveToHistory(city) {
    let history = JSON.parse(localStorage.getItem('weatherHistory')) || [];
    
    // Nếu thành phố chưa có trong lịch sử thì thêm vào
    if (!history.includes(city)) {
        history.unshift(city); // Thêm vào đầu mảng
        if (history.length > 5) history.pop(); // Giới hạn 5 thành phố
        localStorage.setItem('weatherHistory', JSON.stringify(history));
        renderHistory();
    }
}

function renderHistory() {
    const historyList = document.getElementById('historyList');
    const history = JSON.parse(localStorage.getItem('weatherHistory')) || [];
    historyList.innerHTML = history.map(city => `<li>${city}</li>`).join('');
}

// Gọi renderHistory khi load trang
renderHistory();