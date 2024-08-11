document.addEventListener('DOMContentLoaded', function() {
    // 예시 즐겨찾기된 레시피 데이터
    const favoriteRecipes = [
      { name: 'Pasta Carbonara', url: 'https://example.com/pasta-carbonara', image: 'pasta.jpg' },
      { name: 'Chocolate Cake', url: 'https://example.com/chocolate-cake', image: 'cake.jpg' }
    ];
  
    // 예시 맞춤 레시피 추천 데이터
    const recommendedRecipes = [
      { name: 'Grilled Salmon', url: 'https://example.com/grilled-salmon', image: 'salmon.jpg' },
      { name: 'Caprese Salad', url: 'https://example.com/caprese-salad', image: 'salad.jpg' }
    ];
  
    const favoriteContainer = document.getElementById('favorite-container');
    const recommendationContainer = document.getElementById('recommendation-container');
  
    // 즐겨찾기된 레시피 표시
    favoriteRecipes.forEach(recipe => {
      const recipeCard = createRecipeCard(recipe);
      favoriteContainer.appendChild(recipeCard);
    });
  
    // 맞춤 레시피 추천 표시
    recommendedRecipes.forEach(recipe => {
      const recipeCard = createRecipeCard(recipe);
      recommendationContainer.appendChild(recipeCard);
    });
  });
  
  function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.classList.add('recipe-card');
  
    const image = document.createElement('img');
    image.src = recipe.image;
    image.alt = recipe.name;
    card.appendChild(image);
  
    const title = document.createElement('h3');
    title.textContent = recipe.name;
    card.appendChild(title);
  
    const link = document.createElement('a');
    link.href = recipe.url;
    link.textContent = '레시피 보기';
    card.appendChild(link);
  
    return card;
  }
  