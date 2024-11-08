document.getElementById("forgotPasswordForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;

    const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
    });

    if (response.ok) {
        alert("비밀번호 재설정 링크가 이메일로 전송되었습니다.");
    } else {
        alert("이메일 전송에 실패했습니다. 다시 시도해 주세요.");
    }
});
