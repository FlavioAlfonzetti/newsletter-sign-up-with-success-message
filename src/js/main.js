import '../scss/styles.scss';

const form = document.getElementById('newsletter-form');
const email = document.getElementById('email');
const errorMsg = document.querySelector('.error-msg');

form.addEventListener('submit', function (e) {
  const submittedEmail = email.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(submittedEmail);

  if (!isValidEmail) {
    e.preventDefault();
    /* email.value = ''; */
    errorMsg.textContent = 'Valid email required';
    email.classList.add('error');
  } else {
    localStorage.setItem('submittedEmail', submittedEmail);
    window.location.href = 'success.html';
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const email = document.getElementById('email');
  email.value = ''; // Clear the value of the input field
});
