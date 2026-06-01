// [DOM] Select elements
const title = document.getElementById('title');
const descriptions = document.querySelectorAll('.description');

// [FEATURE] Change content
title.textContent = "Chào DOM!";
descriptions[0].innerHTML = "<b>Đã thay đổi nội dung</b>";

// [UI] Apply styles and classes
title.style.color = "blue";
descriptions[1].classList.add('highlight');