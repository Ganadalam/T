document.addEventListener('DOMContentLoaded', () => {
    const displayName = document.getElementById('displayName');
    const displayEmail = document.getElementById('displayEmail');
    const displayBirthday = document.getElementById('displayBirthday');
    const displayGender = document.getElementById('displayGender');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const birthdayInput = document.getElementById('birthday');
    const genderSelect = document.getElementById('gender');
    const passwordInput = document.getElementById('password');
    const profileForm = document.getElementById('profileForm');

    // 초기 데이터 설정 (실제 구현 시 서버에서 가져와야 함)
    const initialProfileData = {
        name: '김연아',
        email: 'Queen@gmail.com',
        birthday: '1990-01-01',
        gender: '여성'
    };

    displayName.textContent = initialProfileData.name;
    displayEmail.textContent = initialProfileData.email;
    displayBirthday.textContent = initialProfileData.birthday;
    displayGender.textContent = initialProfileData.gender;

    nameInput.value = initialProfileData.name;
    emailInput.value = initialProfileData.email;
    birthdayInput.value = initialProfileData.birthday;
    genderSelect.value = initialProfileData.gender;

    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const updatedProfile = {
            name: nameInput.value,
            email: emailInput.value,
            birthday: birthdayInput.value,
            gender: genderSelect.value,
            password: passwordInput.value
        };

        fetch(profileForm.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProfile)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayName.textContent = updatedProfile.name;
                displayEmail.textContent = updatedProfile.email;
                displayBirthday.textContent = updatedProfile.birthday;
                displayGender.textContent = updatedProfile.gender;
                alert('프로필이 성공적으로 업데이트되었습니다!');
                passwordInput.value = ''; // 업데이트 후 비밀번호 입력 필드 초기화
            } else {
                alert('프로필 업데이트에 실패했습니다!');
            }
        })
        .catch(error => console.error('오류:', error));
    });
});
