// script.js
document.addEventListener("DOMContentLoaded", function() {
    const cookingSteps = [
        "물을 끓입니다.",
        "소금을 넣고 파스타를 넣어 익힙니다.",
        "파스타를 건져 물기를 흘립니다.",
        "볼에 파스타를 담고 소스를 넣어 섞습니다.",
        "접시에 담아 피자 썬듯이 얹고, 파슬리를 뿌립니다."
    ];

    const cookingStepsList = document.getElementById("cooking-steps");
    cookingSteps.forEach(step => {
        const li = document.createElement("li");
        li.textContent = step;
        cookingStepsList.appendChild(li);
    });
});
