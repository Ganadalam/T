// 회원가입 폼 유효성 검사
function validateSignupForm() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    if (password.value !== confirmPassword.value) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    }

    // 이메일과 비밀번호 유효성 검사 예시
    if (!email.value || !password.value) {
        alert("모든 필드를 채워주세요.");
        return false;
    }
    return true;
}

// 비밀번호 찾기 폼 유효성 검사
function validateForgotPasswordForm() {
    const email = document.getElementById("forgotEmail");

    if (!email.value) {
        alert("이메일을 입력하세요.");
        return false;
    }
    return true;
}
