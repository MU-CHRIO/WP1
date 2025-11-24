/* validation.js - form validation helpers
   Provides simple client-side validation and displays inline errors
*/
document.addEventListener('DOMContentLoaded', () => {
  // Attach validations for forms with data-validate attribute
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', function(e){
      const valid = validateForm(form);
      if(!valid) e.preventDefault();
    });
  });
});

function showError(input, message){
  let parent = input.closest('.form-group') || input.parentElement;
  let el = parent.querySelector('.invalid-feedback');
  if(!el){
    el = document.createElement('div');
    el.className = 'invalid-feedback';
    parent.appendChild(el);
  }
  el.innerText = message;
  input.classList.add('is-invalid');
}

function clearError(input){
  input.classList.remove('is-invalid');
  const parent = input.closest('.form-group') || input.parentElement;
  const el = parent.querySelector('.invalid-feedback');
  if(el) el.innerText = '';
}

export function validateForm(form){
  let ok = true;
  // Basic required fields
  form.querySelectorAll('[data-required]').forEach(input => {
    clearError(input);
    if(!input.value || input.value.trim()===''){
      showError(input, 'This field is required');
      ok = false;
    }
  });
  // Email format check
  const email = form.querySelector('[type="email"]');
  if(email && email.value){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    clearError(email);
    if(!re.test(email.value)){
      showError(email, 'Enter a valid email address');
      ok = false;
    }
  }
  return ok;
}

// Also expose showError/clearError for other modules
export { showError, clearError };
