document.addEventListener("DOMContentLoaded", function() {
    // 가정: 서버에서 주간 인기 메뉴 데이터를 받아옴
    const weeklyMenu = [
        { name: "짜장면", image: "food1.jpg" },
        { name: "피자", image: "food2.jpg" },
        { name: "초밥", image: "food3.jpg" },
        { name: "떡볶이", image: "food4.jpg" },
        { name: "파스타", image: "food5.jpg" }
    ];

    const menuContainer = document.getElementById("menu-container");

    // 주간 인기 메뉴를 표시하는 함수
    function displayWeeklyMenu() {
        menuContainer.innerHTML = ""; // 메뉴 컨테이너 초기화
        weeklyMenu.forEach(menu => {
            const menuItem = document.createElement("div");
            menuItem.className = "menu-item";
            const img = document.createElement("img");
            img.src = menu.image;
            img.alt = menu.name;
            const name = document.createElement("h3");
            name.textContent = menu.name;
            menuItem.appendChild(img);
            menuItem.appendChild(name);
            menuContainer.appendChild(menuItem);
        });
    }

    displayWeeklyMenu(); // 페이지 로드 시 주간 인기 메뉴 표시
});
