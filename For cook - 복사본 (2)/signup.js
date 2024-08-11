document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let isValid = true;

    // 아이디 유효성 검사
    if (username.length < 8) {
        isValid = false;
        document.getElementById('username-error').textContent = '아이디는 최소 8자 이상이어야 합니다.';
        document.getElementById('username-error').style.display = 'block';
    } else {
        document.getElementById('username-error').style.display = 'none';
    }

    // 비밀번호 유효성 검사
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    if (!passwordPattern.test(password)) {
        isValid = false;
        document.getElementById('password-error').textContent = '비밀번호는 12자 이상이어야 하며 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.';
        document.getElementById('password-error').style.display = 'block';
    } else {
        document.getElementById('password-error').style.display = 'none';
    }

    // 이메일 유효성 검사
    if (!validateEmail(email)) {
        isValid = false;
        document.getElementById('email-error').textContent = '유효한 이메일을 입력하세요.';
        document.getElementById('email-error').style.display = 'block';
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    if (isValid) {
        document.getElementById('signup-result').textContent = '회원가입 성공!';
    } else {
        document.getElementById('signup-result').textContent = '회원가입 실패. 입력한 정보를 확인하세요.';
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}