document.addEventListener('DOMContentLoaded', () => {
    const favoriteIcons = document.querySelectorAll('.favorite-icon');

    favoriteIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            if (icon.classList.contains('liked')) {
                icon.classList.remove('liked');
                icon.textContent = '❤️'; // 기본 상태
            } else {
                icon.classList.add('liked');
                icon.textContent = '💔'; // 좋아요 상태
            }
        });
    });

    // 검색 기능
    const searchInput = document.getElementById('search');
    const recipeCards = document.querySelectorAll('.recipe-card');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        recipeCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            if (title.includes(query) || description.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
