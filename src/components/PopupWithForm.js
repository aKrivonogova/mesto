import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor(popupElement, submitCallBack) {
        super(popupElement)
        this._form = this._popupElement.querySelector('.form');
        this._submitCallBack = submitCallBack;
        this._inputList = this._form.querySelectorAll('.form__input');
        this._popupButton = this._form.querySelector('.form__submit-button');
        this._popupButtonTextContent = this._popupButton.textContent;
    }
    
    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach((inputElement) => {
            this._inputValues[inputElement.name] = inputElement.value;
        });
        return this._inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitCallBack(this._getInputValues());
        });
    }
    close() {
        super.close();
        this._form.reset();
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._popupButton.textContent = 'Сохранение...';
            this._popupButton.disabled = false;
        } else {
            this._popupButton.textContent = this._popupButtonTextContent;
            this._popupButton.disabled = true;
        }
    }

}