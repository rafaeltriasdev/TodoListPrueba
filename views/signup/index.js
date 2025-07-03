const form = document.querySelector('#form');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const matchInput = document.querySelector('#match-input');

// Regex validations
const EMAIL_VALIDATION = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const PASSWORD_VALIDATION = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,8}$/;
const NAME_VALIDATION = /^[A-Z][a-zA-Z-ÿ\u00f1\u00d1]+(\s*[A-Z][a-zA-Z-ÿ\u00f1\u00d1]*)$/;

// Events

nameInput.addEventListener('input', e => {
    const nameValidation = NAME_VALIDATION.test(e.target.value);

    if (e.target.value === '') {
        nameInput.classList.remove('focus:outline-indigo-700');
        nameInput.classList.remove('focus:outline-green-700');
        nameInput.classList.add('focus:outline-red-700');
    }

    if (nameValidation) {
        nameInput.classList.remove('focus:outline-indigo-700');
        nameInput.classList.add('focus:outline-green-700');
    } else {
        nameInput.classList.remove('focus:outline-indigo-700');
        nameInput.classList.remove('focus:outline-green-700');
        nameInput.classList.add('focus:outline-red-700');
    }
});