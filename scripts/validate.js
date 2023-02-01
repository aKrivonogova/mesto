const showInputError = (formElement, inputElement, config) => {
    const { errorClass, inputErrorClass } = config;
    const elementError = formElement.querySelector(`#${inputElement.id}-error`);
    elementError.classList.add(errorClass);
    elementError.textContent = inputElement.validationMessage;
    inputElement.classList.add(inputErrorClass);
};

const hideInputError = (formElement, inputElement, config) => {
    const { errorClass, inputErrorClass } = config;
    const elementError = formElement.querySelector(`#${inputElement.id}-error`);
    elementError.classList.remove(errorClass);
    elementError.textContent = '';
    inputElement.classList.remove(inputErrorClass);
};

const checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, config);
    } else {
        hideInputError(formElement, inputElement, config);
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

const setEventListeners = (formElement, config) => {
    const { inputSelector, submitButtonSelector } = config;
    const buttonElement = formElement.querySelector(submitButtonSelector);
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(buttonElement, inputList);
        })
    });
    toggleButtonState(buttonElement, inputList);
};

const disabledButton = (formElement, config) => {
    const { submitButtonSelector } = config;
    const buttonElement = formElement.querySelector(submitButtonSelector);
    buttonElement.disabled = true;
}

const enableValidation = (config) => {
    const { formSelector } = config;
    const formElementsList = Array.from(document.querySelectorAll(formSelector));
    formElementsList.forEach((formElement) => {
        formElement.addEventListener('submit', () => {
            disabledButton(formElement, config);
        })
        setEventListeners(formElement, config);
    });
};