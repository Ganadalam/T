// 주간 인기 메뉴 슬라이드 기능
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider img');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;
    let slideInterval;

    const showImage = (index) => {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    };

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    };

    const prevImage = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    };

    const startSlide = () => {
        slideInterval = setInterval(nextImage, 5000); // 5초마다 자동 슬라이드
    };

    const stopSlide = () => {
        clearInterval(slideInterval);
    };

    rightArrow.addEventListener('click', () => {
        nextImage();
        stopSlide();
        startSlide();
    });

    leftArrow.addEventListener('click', () => {
        prevImage();
        stopSlide();
        startSlide();
    });

    // 마우스 오버 시 자동 슬라이드 정지
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseover', stopSlide);
    slider.addEventListener('mouseout', startSlide);

    showImage(currentIndex);
    startSlide();
});

// 즐겨찾기 추가 함수
function addFavorite(button) {
    const favoriteIcon = button.textContent === '♡' ? '❤️' : '♡';
    button.textContent = favoriteIcon;
}
