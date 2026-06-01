// [DOM] Click event
const btn = document.getElementById('colorBtn');
btn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

// [FEATURE] Input event
const input = document.getElementById('userInput');
input.addEventListener('input', (e) => {
    console.log("Đang nhập:", e.target.value);
});

// [FEATURE] Form event
const form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Ngăn load lại trang
    console.log("Form đã được gửi");
});