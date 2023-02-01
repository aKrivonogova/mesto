const showInputError = (formElement, inputElement, validationSelectors) => {
    const { errorClass, inputErrorClass } = validationSelectors;
    const elementError = formElement.querySelector(`#${inputElement.id}-error`);
    elementError.classList.add(errorClass);
    elementError.textContent = inputElement.validationMessage;
    inputElement.classList.add(inputErrorClass);
};

const hideInputError = (formElement, inputElement, validationSelectors) => {
    const { errorClass, inputErrorClass } = validationSelectors;
    const elementError = formElement.querySelector(`#${inputElement.id}-error`);
    elementError.classList.remove(errorClass);
    elementError.textContent = '';
    inputElement.classList.remove(inputErrorClass);
};

const checkInputValidity = (formElement, inputElement, validationSelectors) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, validationSelectors);
    } else {
        hideInputError(formElement, inputElement, validationSelectors);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => !inputElement.validity.valid);
};

const toggleButtonState = (buttonElement, inputList) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
    } else {
        buttonElement.disabled = false;
    }
};


const setEventListeners = (formElement, validationSelectors) => {
    const { inputSelector, submitButtonSelector } = validationSelectors;
    const buttonElement = formElement.querySelector(submitButtonSelector);
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
 
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, validationSelectors);
            toggleButtonState(buttonElement, inputList);
        })
    });
    toggleButtonState(buttonElement, inputList);
};

const enableValidation = (validationSelectors) => {
    const { formSelector } = validationSelectors;
    const formElementsList = Array.from(document.querySelectorAll(formSelector));
    formElementsList.forEach((formElement) => {
        setEventListeners(formElement, validationSelectors);
    });
};