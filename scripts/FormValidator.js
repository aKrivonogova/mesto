export default class FormValidator {
    constructor(data, formElement) {
        this._formElement = formElement;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }

    _showInputError(inputElement, errorMessage) {
        const elementError = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        elementError.classList.add(this._errorClass);
        elementError.textContent = errorMessage;
    }
    _hideInputError(inputElement) {
        const elementError = this._formElement.querySelector(`#${inputElement.id}-error`);
        elementError.textContent = '';
        elementError.classList.remove(this._errorClass);
        inputElement.classList.remove(this._inputErrorClass);
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage)
        } else
            this._hideInputError(inputElement)
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid
        })
    }

    _disabledButton() {
        this._buttonElement.disabled = true;
    }

    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._disabledButton()
        } else {
            this._buttonElement.disabled = false
        }
    }

    _setEventListeners() {
        this._toggleButtonState()
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement)
                this._toggleButtonState()
            })
        })
    }

    enableValidation() {
        this._setEventListeners()
        this._formElement.addEventListener('submit', () => {
            this._disabledButton();
        })
    }

}