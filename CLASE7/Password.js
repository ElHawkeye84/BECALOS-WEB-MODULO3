// Función para generar una contraseña
function generarContraseña() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+{}:"<>?[];,./\'';

    if (charset === '') {
        alert("Por favor, selecciona al menos una opción para generar la contraseña.");
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').value = password;
    actualizarFortaleza(password);
}

// Función para copiar la contraseña al portapapeles
function copiarContraseña() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Contraseña copiada al portapapeles');
}

// Función para actualizar la fortaleza de la contraseña
function actualizarFortaleza(password) {
    const strengthIndicator = document.getElementById('strength-indicator');
    const length = password.length;
    let strength = 0;

    if (length >= 8) strength += 1;
    if (length >= 12) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    if (strength <= 2) {
        strengthIndicator.style.backgroundColor = 'red';
    } else if (strength <= 4) {
        strengthIndicator.style.backgroundColor = 'orange';
    } else {
        strengthIndicator.style.backgroundColor = 'green';
    }
}

// Actualizar el valor de la longitud de la contraseña
document.getElementById('length').addEventListener('input', function() {
    document.getElementById('length-value').textContent = this.value;
});