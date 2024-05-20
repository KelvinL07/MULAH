function validatePhoneNumber() {
    const phone = document.getElementById('phone').value;
    const checkIcon = document.getElementById('check-icon');
    
    if (phone === "173527250") {  
        checkIcon.classList.add('valid');
    } else {
        checkIcon.classList.remove('valid');
    }
}

function checkLoyaltyPoints() {
    const phone = document.getElementById('phone').value;
    const countryCode = document.getElementById('country-code').value;
    const fullPhoneNumber = countryCode + phone;
    if (fullPhoneNumber === "+60173527250") {
        localStorage.setItem('phone', fullPhoneNumber);
        window.location.href = 'page2.html';
    } else {
        alert("Please enter a valid phone number.");
    }
}

function register() {
    const name = document.getElementById('name').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const email = document.getElementById('email').value;

    if (name && day && month && year && email) {
        const birthday = `${day}/${month}/${year}`;
        localStorage.setItem('name', name);
        localStorage.setItem('birthday', birthday);
        localStorage.setItem('email', email);
        window.location.href = 'page3.html';
    } else {
        alert("Please fill in all fields.");
    }
}
function validatePhoneNumber() {
    const phone = document.getElementById('phone').value;
    const checkIcon = document.getElementById('check-icon');
    
    if (phone === "173527250") { 
        checkIcon.classList.add('valid');
        id="check-icon"
    } else {
        checkIcon.classList.remove('valid');
    }
}

function checkLoyaltyPoints() {
    const phone = document.getElementById('phone').value;
    const countryCode = document.getElementById('country-code').value;
    const fullPhoneNumber = countryCode + phone;
    if (fullPhoneNumber === "+60173527250") {
        localStorage.setItem('phone', fullPhoneNumber);
        window.location.href = 'page2.html';
    } else {
        alert("Please enter a valid phone number.");
    }
}

function validateField(inputId, errorId) {
    const input = document.getElementById(inputId).value;
    const error = document.getElementById(errorId);
    
    if (input) {
        error.style.display = 'none';
    } else {
        error.style.display = 'block';
    }
}

function validateBirthday() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const error = document.getElementById('birthday-error');

    if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year.length === 4 && year >= 1900 && year <= new Date().getFullYear()) {
        error.style.display = 'none';
        return true;
    } else {
        error.style.display = 'block';
        return false;
    }
}

function toggleEmail() {
    const noEmailChecked = document.getElementById('no-email').checked;
    const emailField = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    if (noEmailChecked) {
        emailField.value = '';
        emailField.disabled = true;
        emailError.style.display = 'none';
    } else {
        emailField.disabled = false;
    }
}

function register() {
    const name = document.getElementById('name').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const email = document.getElementById('email').value;
    const noEmailChecked = document.getElementById('no-email').checked;

    const isBirthdayValid = validateBirthday();

    if (name && isBirthdayValid && (email || noEmailChecked)) {
        const birthday = `${day}/${month}/${year}`;
        localStorage.setItem('name', name);
        localStorage.setItem('birthday', birthday);
        localStorage.setItem('email', noEmailChecked ? 'No email' : email);
        window.location.href = 'page3.html';
    } else {
        alert("Please fill in all fields with valid information.");
        validateField('name', 'name-error');
        validateField('day', 'birthday-error');
        validateField('month', 'birthday-error');
        validateField('year', 'birthday-error');
        validateField('email', 'email-error');
    }
}
