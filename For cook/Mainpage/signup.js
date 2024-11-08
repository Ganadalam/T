document.getElementById("signupForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    if (password !== confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }

    const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
    });

    if (response.ok) {
        alert("회원가입이 완료되었습니다.");
        window.location.href = "/login";  // 회원가입 후 로그인 페이지로 이동
    } else {
        alert("회원가입에 실패했습니다. 다시 시도해 주세요.");
    }
});
