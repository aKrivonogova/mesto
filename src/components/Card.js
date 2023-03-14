export default class Card {
    constructor({ data, handleCardClick }, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._cardSelector = document.getElementById(cardSelector)
    }
    _getTemplate() {
        this._cardElement = this._cardSelector
            .content
            .querySelector('.element')
            .cloneNode(true);
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
        this._elementDelete.addEventListener('click', () => {
            this._deleteCard();
        })
        this._elementImage.addEventListener('click', () => {
            this._handleCardClick({ name: this._name, link: this._link })
        })
    }
    generateCard() {
        this._getTemplate();

        this._elementImage = this._cardElement.querySelector('.element__image');
        this._elementLike = this._cardElement.querySelector('.element__like');
        this._elementDelete = this._cardElement.querySelector('.element__delete');
        this._elementName = this._cardElement.querySelector('.element__name');

        this._setEventListeners();

        this._elementName.textContent = this._name;
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;

        return this._cardElement;
    }
}

