const input = document.querySelector('#password');
const eye = document.querySelector('.far');

function toggle() {
    eye.classList.toggle('fa-eye-slash');
    eye.classList.toggle('fa-eye');
    input.type = (input.type === 'password') ? 'text' : 'password';
}
eye.addEventListener('click', toggle);