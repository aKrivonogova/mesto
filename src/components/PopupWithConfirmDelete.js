import Popup from "./Popup.js";

export default class PopupWithConfirmDelete extends Popup {
    constructor(popupElement) {
        super(popupElement)
        this._form = this._popupElement.querySelector('.form');
        this._popupButton = this._form.querySelector('.form__submit-button');
        this._popupButtonTextContent = this._popupButton.textContent;
    }

    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleSubmitConfirm();
        })
    }
    
    setSubmitAction(action) {
        this._handleSubmitConfirm = action;
    }
    renderLoading(isLoading) {
        if (isLoading) {
            this._popupButton.textContent = 'Сохранение...';
        } else {
            this._popupButton.textContent = this._popupButtonTextContent;
        }
    }

}  