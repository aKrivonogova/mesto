export default class Card {
    constructor({ data, handleCardClick, handleLikeClick, handleCardDelete }, cardSelector, userId) {
       
        this._handleLikeClick = handleLikeClick;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;

        this._id = data._id;
        this._userId = userId;
        this._ownerId = data.owner._id;

        this._likes = data.likes;
        this._name = data.name;
        this._link = data.link;

        this._cardTemplate = document.getElementById(cardSelector)
    }
    _getTemplate() {
        this._cardElement = this._cardTemplate
            .content
            .querySelector('.element')
            .cloneNode(true);
    }

    updateLikesCount(value) {
        this._likes = value;
        this.setLikeCount(value.length);
    }

    setLikeCount(likes) {
        this._elementLikeCount.textContent = likes;
        this._toggleLike();
    }

    likedByUser() {
        return this._likes.some((like) => {
            return like._id === this._userId;
        })
    }

    _toggleLike() {
        if (this.likedByUser()) {
            this._elementLike.classList.add('element__like_active');
        } else {
            this._elementLike.classList.remove('element__like_active');
        };
    }

    removeCard() {
        this._cardElement.remove();
    }

    _setEventListeners() {
        this._elementImage.addEventListener('click', () => {
            this._handleCardClick({ name: this._name, link: this._link })
        })
        this._elementLike.addEventListener('click', () => {
            this._handleLikeClick();
        });

        this._elementDelete.addEventListener('click', () => {
            this._handleCardDelete();
        })

    }
    generateCard() {
        
        this._getTemplate();

        this._elementImage = this._cardElement.querySelector('.element__image');
        this._elementLike = this._cardElement.querySelector('.element__like');
        this._elementDelete = this._cardElement.querySelector('.element__delete');
        this._elementName = this._cardElement.querySelector('.element__name');
        this._elementLikeCount = this._cardElement.querySelector('.element__like-count');

        if ((this._ownerId !== this._userId)) {
            this._elementDelete.style.display = 'none';
        };
        if (this._likes.find((obj) => this._userId === obj._id)) {
            this._elementLike.classList.add('element__like_active');
        };

        this._elementLikeCount.textContent = this._likes.length;

        this._elementName.textContent = this._name;
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;

        this._setEventListeners();

        return this._cardElement;
    }
}
