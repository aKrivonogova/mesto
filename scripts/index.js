import Card from './Card.js'
import initialCards from './initialCards.js'
import FormValidator from './FormValidator.js'

const popupImage = document.querySelector('.popup_function_image');
const popupImageSrc = document.querySelector('.popup__image');
const popupImageDescription = document.querySelector('.popup__image-description');
const popupList = document.querySelectorAll('.popup');
const popupAdd = document.querySelector('.popup_function_add');
const popupEdit = document.querySelector('.popup_function_edit');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');

const inputName = document.querySelector('input[name="username"]');
const inputDescription = document.querySelector('input[name="description"]');
const inputCardName = document.querySelector('input[name="cardName"]');
const inputCardSrc = document.querySelector('input[name="cardImageSrc"]');

const formAdd = document.querySelector('.form_function_add');
const formEdit = document.querySelector('.form_function_edit')

const buttonEditProfile = document.querySelector('.profile__edit-button')
const buttonAddElement = document.querySelector('.profile__add-button');

const buttonsCloseList = document.querySelectorAll('.popup__close-button')
const cardList = document.querySelector('.elements__list');

const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inputErrorClass: 'form__input_type-error',
    errorClass: 'form__input-error_active'
}

const cardAddFormValidation = new FormValidator(config, formAdd);
cardAddFormValidation.enableValidation();
const profileEditFormValidation = new FormValidator(config, formEdit)
profileEditFormValidation.enableValidation();

function renderCard(card) {
    cardList.prepend(card);
}

initialCards.forEach(item => {
    const cardItem = createCard(item.name, item.link);
    renderCard(cardItem);
})


function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
}

function initClosePopupHandler() {
    buttonsCloseList.forEach((closeBtn) => {
        const popupElement = closeBtn.closest('.popup')
        closeBtn.addEventListener('click', () => {
            closePopup(popupElement);
        });
    })
}

function closeByEsc(evt) {
    if (evt.key === "Escape") {
        const popupElement = document.querySelector('.popup_opened');
        closePopup(popupElement);
    }
}

const overlayClickHandlers = (evt) => {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
    }
}

buttonAddElement.addEventListener('click', () => {
    openPopup(popupAdd);
})

buttonEditProfile.addEventListener('click', () => {
    transferMetaDataToInput();
    openPopup(popupEdit);
})

function getInputValue(inputElement) {
    return inputElement.value;
}
function resetForm(form) {
    form.reset();
}

function createCard(cardName, cardILink) {
    return new Card('mesto', cardName, cardILink).generateCard();
}

function handleRenderCard(evt) {
    evt.preventDefault();
    const newCard = createCard(getInputValue(inputCardName), getInputValue(inputCardSrc))
    renderCard(newCard);
    closePopup(popupAdd);
}

formEdit.addEventListener('submit', handleEditFormSubmit);

formAdd.addEventListener('submit', (evt) => {
    evt.preventDefault();
    handleRenderCard(evt);
    resetForm(formAdd);
})

function transferMetaDataToInput() {
    inputName.value = profileName.textContent.trim();
    inputDescription.value = profileJob.textContent.trim();
};

function handleEditFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = getInputValue(inputName);
    profileJob.textContent = getInputValue(inputDescription);
    closePopup(popupEdit);
};


initClosePopupHandler();

popupList.forEach((popupElement) => {
    popupElement.addEventListener('mousedown', overlayClickHandlers);
})


export { openPopup, popupImage, popupImageSrc, popupImageDescription };