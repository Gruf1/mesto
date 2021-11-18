const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__input-error_active',
  inactiveButtonClass: 'popup__button_inactive',
  submitButtonSelector: '.popup__button_type_submit',
};

function InputError(form, input) {
  return form.querySelector(`.popup__input-error_type_${input.id}`);
}

function InputValidity(input) {
  return !input.validity.valid;
}

function isInvalid(form) {
  return !form.checkValidity();
}

const resetError = (form, {inputSelector, inputErrorClass, errorClass}) => {
  const inputs = Array.from(form.querySelectorAll(inputSelector));
  inputs.forEach((input) => {
    if (input.matches('.' + inputErrorClass)) {
      input.classList.remove(inputErrorClass);
      const error = InputError(form, input);
      error.classList.remove(errorClass);
    }
  });
};

function handleInputError(form, input, errorMessage, {inputErrorClass, errorClass}) {
  const error = InputError(form, input);
  input.classList.toggle(inputErrorClass, InputValidity(input));
  error.classList.add(errorClass);
  error.textContent = errorMessage;
}

function toggleButton(form, {submitButtonSelector, inactiveButtonClass}) {
  const button = form.querySelector(submitButtonSelector);
  button.disabled = isInvalid(form);
  button.classList.toggle(inactiveButtonClass, isInvalid(form));
}

function setEventListeners(form, {inputSelector, ...config}) {
  const inputs = Array.from(form.querySelectorAll(inputSelector));
  toggleButton(form, config);
  inputs.forEach((input) => {
    input.addEventListener('input', function (evt) {
      const errorMessage = input.validationMessage;
      handleInputError(form, input, errorMessage, config);
      toggleButton(form, config);
    });
  });
}

function enableValidation({formSelector, ...config}) {
  const forms = Array.from(document.querySelectorAll(formSelector));

  forms.forEach((form) => {
    setEventListeners(form, config);
  });
}

enableValidation(config);