function searchRecipes() {
    const query = document.getElementById('search').value;
    // 검색 로직 추가
}

function sortBy(criteria) {
    // 정렬 로직 추가
    if (criteria === 'latest') {
        // 최신순 정렬
    } else if (criteria === 'popular') {
        // 인기순 정렬
    }
}

function filterRecipes() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const recipes = document.querySelectorAll(".recipe-item");

    recipes.forEach(recipe => {
        const title = recipe.querySelector("h3").textContent.toLowerCase();
        recipe.style.display = title.includes(query) ? "block" : "none";
    });
}

function sortRecipes(order) {
    const container = document.querySelector(".recipe-list");
    const recipes = Array.from(container.children);

    recipes.sort((a, b) => {
        if (order === "newest") {
            return new Date(b.dataset.date) - new Date(a.dataset.date); // 최신순 정렬
        } else if (order === "popular") {
            return b.dataset.likes - a.dataset.likes; // 인기순 정렬
        }
    });

    recipes.forEach(recipe => container.appendChild(recipe));
}
