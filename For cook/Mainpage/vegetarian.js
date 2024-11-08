document.querySelectorAll('.favorite-icon').forEach(function (button) {
    button.addEventListener('click', function () {
        const heartIcon = button.querySelector('i');

        if (heartIcon.classList.contains('far', 'fa-heart')) {
            // 빈 하트 -> 찬 하트로 변경
            heartIcon.classList.remove('far', 'fa-heart');
            heartIcon.classList.add('fas', 'fa-heart');
        } else if (heartIcon.classList.contains('fas', 'fa-heart')) {
            // 찬 하트 -> 깨진 하트로 변경
            heartIcon.classList.remove('fas', 'fa-heart');
            heartIcon.classList.add('fas', 'fa-heart-broken');
        } else if (heartIcon.classList.contains('fas', 'fa-heart-broken')) {
            // 깨진 하트 -> 빈 하트로 변경
            heartIcon.classList.remove('fas', 'fa-heart-broken');
            heartIcon.classList.add('far', 'fa-heart');
        }
    });
});
