// [FEATURE] Get and format current time
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('vi-VN');
    document.getElementById('clock').textContent = timeString;
}
updateClock();