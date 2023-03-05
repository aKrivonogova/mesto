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
        this._cardElement.querySelector('.element__like').classList.toggle('element__like_active');
    }
    _deleteCard() {
        this._cardElement.querySelector('.element__delete').closest('.element').remove();
    }
    _setEventListeners() {
        this._cardElement.querySelector('.element__like').addEventListener('click', () => {
            this._isLikeCard();
        });
        this._cardElement.querySelector('.element__delete').addEventListener('click', () => {
            this._deleteCard();
        })
        this._cardElement.querySelector('.element__image').addEventListener('click', () => {
            this._handlerPopupImageOpen();
        })
    }
    generateCard() {
        this._cardElement = this._getTemplate();
        this._setEventListeners();
        this._cardElement.querySelector('.element__name').textContent = this._name;
        this._cardElement.querySelector('.element__image').src = this._link;
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

