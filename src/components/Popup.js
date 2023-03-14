export default class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._overlayClickHandlers = this._overlayClickHandlers.bind(this);
    }
    //Закрытие по кнопке esc
    _handleEscClose(event) {
        if (event.key === "Escape") {
            this.close();
        }
    }
    // Закрытие по клику на оверлей 
    _overlayClickHandlers(event) {
        if (event.target === event.currentTarget) {
            this.close();
        }
    }

    // Добавляем слушатели собития на закрытие любого попапа на странице
    setEventListeners() {
        this._popupElement.querySelector('.popup__close-button').addEventListener('click', () => {
            this.close();
        })
    }
    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        this._popupElement.addEventListener('mousedown', this._overlayClickHandlers);
    }
    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupElement.removeEventListener('mousedown', this._overlayClickHandlers);
    }
}