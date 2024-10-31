let currentIndex = 0;

function showNextImage() {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * 100; // 每次移動的百分比
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 3000); // 每3秒自動輪播
