document.querySelector('nav a[href="/signup"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    
    // Redirect to signup.html
    window.location.href = '회원가입.html';
  });

  document.querySelector('nav a[href="/login"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    
    // Redirect to login.html
    window.location.href = '로그인.html';
  });

  // 재료와 레시피 데이터 (이미지 URL 포함)
const recipes = [
    { name: "스파게티", ingredients: ["스파게티면", "토마토 소스", "양파", "마늘", "올리브 오일"], image: "spaghetti.jpg" },
    { name: "샐러드", ingredients: ["양상추", "토마토", "오이", "당근", "드레싱"], image: "salad.jpg" },
    { name: "오믈렛", ingredients: ["계란", "우유", "양파", "토마토", "치즈"], image: "omelette.jpg" },
    // 더 많은 레시피 정보 추가 가능
];

// 요리 추천 함수
function searchRecipe() {
    // 입력된 재료 가져오기
    const userInput = document.getElementById("ingredientInput").value;
    // 입력된 재료를 쉼표로 분리하여 배열로 변환
    const userIngredients = userInput.split(",").map(ingredient => ingredient.trim().toLowerCase());

    // 결과를 표시할 컨테이너 가져오기
    const recipeContainer = document.getElementById("recipe-container");
    // 검색 결과 초기화
    recipeContainer.innerHTML = "";

    // 재료에 맞는 레시피 필터링
    const matchedRecipes = recipes.filter(recipe => {
        return userIngredients.every(ingredient => recipe.ingredients.includes(ingredient));
    });

    // 검색 결과가 없는 경우 처리
    if (matchedRecipes.length === 0) {
        recipeContainer.innerHTML = "<p>해당 재료로 만들 수 있는 레시피가 없습니다.</p>";
    } else {
        // 검색 결과 표시
        matchedRecipes.forEach(recipe => {
            const recipeItem = document.createElement("div");
            recipeItem.className = "recipe-item";
            recipeItem.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
                <h3>${recipe.name}</h3>
                <p>재료: ${recipe.ingredients.join(", ")}</p>
            `;
            recipeContainer.appendChild(recipeItem);
        });
    }
}

// 슬라이드 
let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;
    
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    
    const offset = -slideIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(slideIndex + direction);
}

// 초기 슬라이드를 보여줌
showSlide(slideIndex);
  