const form = document.querySelector('#form');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const matchInput = document.querySelector('#match-input');

// Regex validations
const EMAIL_VALIDATION = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_VALIDATION =  /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,16}$/;
const NAME_VALIDATION = /^[A-Z\u00d1][a-zA-Z-ÿáéíóú\u00f1\u00d1]+(\s*[A-Z\u00d1][a-zA-Z-ÿáéíóú\u00f1\u00d1\s]*)$/;

// Validations 
let nameValidation = false;
let emailValidation = false;
let passwordValidation = false;
let matchValidation = false;

const validation = (input, regexValidation) => {
    if (input.value === '') {
        input.classList.remove('outline-red-700', 'outline-1', 'outline');
        input.classList.remove('outline-green-700', 'outline-1', 'outline');
        input.classList.add('focus:outline-indigo-700');
    } else if (regexValidation) {
        input.classList.remove('focus:outline-indigo-700');
        input.classList.add('outline-green-700', 'outline-1', 'outline');
    } else if (!regexValidation) {
        input.classList.remove('focus:outline-indigo-700');
        input.classList.remove('outline-green-700', 'outline-1', 'outline');
        input.classList.add('outline-red-700', 'outline-1', 'outline');
    }
};

// Events
nameInput.addEventListener('input', e => {
    nameValidation = NAME_VALIDATION.test(e.target.value);
    validation(nameInput, nameValidation);
});

emailInput.addEventListener('input', e => {
    emailValidation = EMAIL_VALIDATION.test(e.target.value);
    validation(emailInput, emailValidation);
});

passwordInput.addEventListener('input', e => {
    passwordValidation = PASSWORD_VALIDATION.test(e.target.value);
    validation(passwordInput, passwordValidation);
});

matchInput.addEventListener('input', e => {
    matchValidation = MATCH_VALIDATION.test(e.target.value);
    validation(matchInput, matchValidation);
});