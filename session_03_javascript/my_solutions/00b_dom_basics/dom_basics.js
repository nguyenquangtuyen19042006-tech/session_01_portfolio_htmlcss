// [DOM] Select elements
const title = document.getElementById('title');
const descriptions = document.querySelectorAll('.description');

// [FEATURE] Change content
title.textContent = "Chào DOM!";
descriptions[0].innerHTML = "<b>Đã thay đổi nội dung</b>";