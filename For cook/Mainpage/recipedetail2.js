const recipes = [
    {
        name: '닭가슴살 샐러드',
        cookingTime: '20분',
        difficulty: '쉬움',
        ingredients: ['닭가슴살 200g', '혼합 채소 100g', '올리브유 1큰술', '발사믹 식초 1큰술', '소금, 후추 약간'],
        instructions: `
            1. 닭가슴살을 소금, 후추로 간을 한 후 팬에 올리브유를 두르고 구워주세요.<br>
            2. 구운 닭가슴살을 식힌 후 먹기 좋은 크기로 잘라줍니다.<br>
            3. 혼합 채소와 함께 접시에 담고, 발사믹 식초를 뿌려줍니다.<br>
            4. 모든 재료를 잘 섞어 서빙합니다.
        `,
        photo: '닭가슴살샐러드.jpg'
    },
    {
        name: '매운 볶음밥',
        cookingTime: '30분',
        difficulty: '보통',
        ingredients: ['양파', '마늘', '고추', '밥', '간장'],
        instructions: `
            1. 양파와 마늘을 잘게 썬다.<br>
            2. 팬에 기름을 두르고 재료를 볶는다.<br>
            3. 밥을 넣고 간장으로 간을 맞춘다.
        `,
        photo: 'recipe1.jpg'
    },
    {
        name: '치킨 스튜',
        cookingTime: '45분',
        difficulty: '어려움',
        ingredients: ['닭고기', '당근', '감자', '양파', '후추'],
        instructions: `
            1. 닭고기를 볶는다.<br>
            2. 양파, 당근, 감자를 추가하고 물을 부어 끓인다.
        `,
        photo: 'recipe2.jpg'
    }
];

// 레시피 정보를 동적으로 추가하는 함수
function renderRecipes() {
    const recipesContainer = document.getElementById('recipes-container');

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.className = 'recipe-container';
        recipeElement.innerHTML = `
            <img src="${recipe.photo}" alt="${recipe.name} 사진" class="recipe-photo">
            <h2>${recipe.name}</h2>
            <p class="recipe-info">
                <strong>조리 시간:</strong> <span>${recipe.cookingTime}</span> |
                <strong>난이도:</strong> <span>${recipe.difficulty}</span>
            </p>
            <h3>재료 목록</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>조리 방법</h3>
            <p>${recipe.instructions}</p>
            <div class="favorite-section">
                <button class="favorite-btn" type="button" aria-label="즐겨찾기 추가">♡</button>
            </div>
        `;
        recipesContainer.appendChild(recipeElement);
    });
}

// 페이지 로드 시 레시피 렌더링
document.addEventListener('DOMContentLoaded', renderRecipes);
