// [DOM] Chọn các phần tử cần thiết
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// [FEATURE] Mở lightbox khi click vào ảnh
document.addEventListener('click', (e) => {
    if (e.target.matches('.lightbox-trigger')) {
        const fullImg = e.target.getAttribute('data-full');
        lightboxImg.src = fullImg;
        lightbox.classList.add('active');
    }
});

// [FEATURE] Đóng lightbox
document.querySelector('.lightbox-close').addEventListener('click', () => {
    lightbox.classList.remove('active');
});