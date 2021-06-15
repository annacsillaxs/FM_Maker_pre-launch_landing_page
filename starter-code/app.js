const submit_btn = document.querySelector('#submit');
const email = document.querySelector('#email');
const form = document.querySelector('#form');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (input.value.trim() === '') {
    showError(input, "Oops! Please add your email");
  } else if (!re.test(input.value.trim())) {
    showError(input, "Oops! That doesn't look an email address");
  } else {
    showSuccess(input);
  }
}

// Check required fields
function checkRequired(input) {
    if(input.value.trim() === '') {
      showError(input, "Oops! Please add your email");
    } else {
      console.log('email');
    }
}

submit_btn.addEventListener('click', function(e) {
  e.preventDefault();

  // checkRequired(email);
  checkEmail(email);
})
