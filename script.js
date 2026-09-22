const nome = document.getElementById('nome');
const email = document.getElementById('email');

function registerUser() {
    const userName = nome.value.trim();
    const userEmail = email.value.trim();

    if (userName === '' || userEmail === '') {
        document.getElementById('error').innerHTML = 'Error: Please fill in both name and email fields!';
        return;
    } else {
        document.getElementById('message').innerHTML = 'Registration successful!';
        document.getElementById('users').innerHTML = `${userName} | ${userEmail}`;
        document.getElementById('error').innerHTML = '';

    }
}