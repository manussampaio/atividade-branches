const nome = document.getElementById('nome');
const email = document.getElementById('email');

function registerUser() {
    const userName = nome.value.trim();
    const userEmail = email.value.trim();

    document.getElementById('message').innerHTML = 'Registration successful!';
    document.getElementById('users').innerHTML = `${userName} | ${userEmail}`;
}