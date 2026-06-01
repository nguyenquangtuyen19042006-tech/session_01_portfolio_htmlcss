// [FEATURE] Real-time validation
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

// Hàm kiểm tra email bằng Regex
const validateEmail = (email) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

nameInput.addEventListener('input', () => {
    if (nameInput.value.length < 3) {
        nameInput.classList.add('error');
    } else {
        nameInput.classList.remove('error');
    }
});