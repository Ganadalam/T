document.addEventListener("DOMContentLoaded", function() {
    const foodList = document.getElementById('food-list');
    const favoriteList = document.getElementById('favorite-list');

    // 음식 추가 버튼 클릭 시 동작
    foodList.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-btn')) {
            const foodItem = event.target.parentNode.querySelector('.food-name').textContent.trim();
            
            // 즐겨찾기 목록에 추가되어 있는지 확인
            const isFavorite = Array.from(favoriteList.querySelectorAll('.food-name')).some(item => item.textContent.trim() === foodItem);
            if (!isFavorite) { // 이미 추가된 음식이 아니면 추가
                const li = document.createElement('li');
                const span = document.createElement('span');
                span.textContent = foodItem;
                span.classList.add('food-name');
                li.appendChild(span);
                const removeBtn = document.createElement('button');
                removeBtn.textContent = '제거';
                removeBtn.classList.add('remove-btn');
                li.appendChild(removeBtn);
                favoriteList.appendChild(li);
            }
        }
    });

    // 즐겨찾기 목록에서 음식 제거 버튼 클릭 시 동작
    favoriteList.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-btn')) {
            event.target.parentNode.remove();
        }
    });
});
