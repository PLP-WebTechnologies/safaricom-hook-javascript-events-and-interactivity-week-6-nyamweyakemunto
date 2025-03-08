function toggleBackground() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
}

function adjustTextSize() {
    document.getElementById('text').style.fontSize = document.getElementById('textSlider').value + 'px';
}

function showModal() {
    document.getElementById('modal').style.display = 'block';
}

function hideModal() {
    document.getElementById('modal').style.display = 'none';
}

function validateForm() {
    let valid = true;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    document.getElementById('nameError').textContent = name.length >= 3 ? '' : 'Name must be at least 3 characters';
    document.getElementById('emailError').textContent = email.includes('@') ? '' : 'Enter a valid email';
    document.getElementById('passwordError').textContent = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password) ? '' : 'Password must have 8 chars, one uppercase, and one number';

    return document.getElementById('nameError').textContent === '' &&
           document.getElementById('emailError').textContent === '' &&
           document.getElementById('passwordError').textContent === '';
}
