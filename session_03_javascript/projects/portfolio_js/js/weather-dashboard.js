// [FEATURE] Fetch thời tiết hiện tại
async function fetchWeather(city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`);
    const data = await res.json();
    renderWeather(data);
}