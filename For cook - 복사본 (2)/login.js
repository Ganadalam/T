document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 기본 동작 막기

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // 로컬 스토리지에서 사용자 데이터 가져오기
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // 사용자 인증
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('로그인 성공!');
        window.location.href = 'welcome.html'; // 로그인 성공 후 리디렉션할 페이지
    } else {
        alert('이메일 또는 비밀번호가 일치하지 않습니다.');
    }
});