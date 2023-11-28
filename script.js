const form = document.getElementById('registrationForm');
const messageElement = document.getElementById('res');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('input1').value;
    const surname = document.getElementById('input2').value;
    const phone = document.getElementById('input3').value;


    if (name === '' || surname === '' || phone === '') {
        alert("Заповніть всі поля!");
        return;
    }

for (const el of name) {
    if(el.toUpperCase() === el.toLowerCase()){
        messageElement.textContent = 'Ім\'я повинно мати тільки літери';
        messageElement.style.color = 'red';
        break;
    }
}


for (const el of surname) {
    if(el.toUpperCase() === el.toLowerCase()){
        messageElement.textContent = 'Прізвище повинно мати тільки літери';
        messageElement.style.color = 'red';
        break;
    }
}
       
    if (!phone.startsWith('+380')) {
        messageElement.textContent = 'Номер повинен починатися з +380';
        messageElement.style.color = 'red';
        return;
    }

    const userData = {
        name: name,
        surname: surname,
        phone: phone
    };

    const existingUserDataJSON = localStorage.getItem('userData');

    if (existingUserDataJSON) {
        const existingUserData = JSON.parse(existingUserDataJSON);

        if (existingUserData.name === name && existingUserData.surname === surname) {
            messageElement.textContent = 'Користувач вже існує. Увійдіть в обліковий запис.';
            messageElement.style.color = 'red';
            return;
        }
    }

    const userDataJSON = JSON.stringify(userData);
    localStorage.setItem('userData', userDataJSON);

    messageElement.textContent = 'Регістрація успішна';
    messageElement.style.color = 'green';
});

