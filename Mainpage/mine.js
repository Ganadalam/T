document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.classList.add('show-message');
    setTimeout(() => {
        confirmationMessage.classList.remove('show-message');
    }, 3000);
});

const favoriteBtn = document.querySelector('.favorite-btn');
favoriteBtn.addEventListener('click', () => {
    favoriteBtn.classList.toggle('active');
});
