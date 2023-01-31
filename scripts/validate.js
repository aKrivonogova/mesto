const showInputError = (formElement, inputElement, errorMessage) => {
    const { errorClass, inputErrorClass } = validationSelectors;
    const elementError = formElement.querySelector(`#${inputElement.id}-error`);
    elementError.classList.add(errorClass);
    elementError.textContent = errorMessage;
    inputElement.classList.add(inputErrorClass);
};

const hideInputError = (formElement, inputElement) => {
    const { errorClass, inputErrorClass } = validationSelectors;
    const elementError = formElement.querySelector(`#${inputElement.id}-error`);
    elementError.classList.remove(errorClass);
    elementError.textContent = '';
    inputElement.classList.remove(inputErrorClass);
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};
const toggleButtonState = (buttonElement, inputList) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
    } else {
        buttonElement.disabled = false;
    }
};

const setEventListeners = (formElement) => {
    const { inputSelector, submitButtonSelector } = validationSelectors;
    const buttonElement = formElement.querySelector(submitButtonSelector);
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    toggleButtonState(buttonElement, inputList);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            toggleButtonState(buttonElement, inputList);
            checkInputValidity(formElement, inputElement);
        })
    });

};

const enableValidation = (validationSelectors) => {
    const { formSelector } = validationSelectors;
    const formElementsList = Array.from(document.querySelectorAll(formSelector));
    formElementsList.forEach((formElement) => {
        setEventListeners(formElement);
    });
};