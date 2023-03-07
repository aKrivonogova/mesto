import { openPopup, popupImage, popupImageSrc, popupImageDescription } from './index.js'

class Card {
    constructor(template, name, link) {
        this._template = template;
        this._name = name;
        this._link = link;
    }
    _getTemplate() {
        const template = document.getElementById(this._template)
            .content
            .querySelector('.element')
            .cloneNode(true);
        return template;
    }

    _isLikeCard() {
        this._elementLike.classList.toggle('element__like_active');
    }
    _deleteCard() {
        this._cardElement.remove();
    }
    _setEventListeners() {
        this._elementLike.addEventListener('click', () => {
            this._isLikeCard();
        });
        this._deleteElement.addEventListener('click', () => {
            this._deleteCard();
        })
        this._elementImage.addEventListener('click', () => {
            this._handlerPopupImageOpen();
        })
    }
    generateCard() {
        this._cardElement = this._getTemplate();
        this._elementImage = this._cardElement.querySelector('.element__image');
        this._elementLike = this._cardElement.querySelector('.element__like');
        this._deleteElement = this._cardElement.querySelector('.element__delete');
        this._elementName = this._cardElement.querySelector('.element__name');

        this._setEventListeners();

        this._elementName.textContent = this._name;
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        return this._cardElement;
    }
    _handlerPopupImageOpen() {
        popupImageSrc.src = this._link;
        popupImage.alt = this._name;
        popupImageDescription.textContent = this._name;
        openPopup(popupImage);
    }
}

export default Card;

