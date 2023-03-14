import Popup from "./Popup.js"
;
export default class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement)
    }
    // Открытие попапа с картинкой и заполнение данными 
    open(data) {
        super.open();
        this.popupImage = this._popupElement.querySelector('.popup__image');
        this.popupImageDescription = this._popupElement.querySelector('.popup__image-description');
        this.popupImage.src = data.link;
        this.popupImage.alt = data.name;
        this.popupImageDescription.textContent = data.name;
    }
}