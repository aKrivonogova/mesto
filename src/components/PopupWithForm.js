import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor(popupElement, submitCallBack) {
        super(popupElement)
        this._form = this._popupElement.querySelector('.form');
        this._submitCallBack = submitCallBack;
        this._inputList = this._form.querySelectorAll('.form__input');
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
            this.close();
        });
    }
    close() {
        super.close();
        this._form.reset();
    }

}