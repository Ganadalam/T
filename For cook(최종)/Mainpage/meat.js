document.addEventListener('DOMContentLoaded', () => {
    const favoriteIcons = document.querySelectorAll('.favorite-icon');

    favoriteIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            if (icon.classList.contains('liked')) {
                icon.classList.remove('liked');
                icon.textContent = '❤️ 즐겨찾기'; // 기본 상태
            } else {
                icon.classList.add('liked');
                icon.textContent = '💔 취소'; // 좋아요 상태
            }
        });
    });
});
