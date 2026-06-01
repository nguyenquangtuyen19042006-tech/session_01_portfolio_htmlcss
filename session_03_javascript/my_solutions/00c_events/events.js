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