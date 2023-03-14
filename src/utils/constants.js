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

const templateSelector = 'mesto';
const elementsListSelector = '.elements__list';

const profileNameSelector = '.profile__name';
const profileDescriptionSelector = '.profile__description'

const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inputErrorClass: 'form__input_type-error',
    errorClass: 'form__input-error_active'
}

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


export { templateSelector, profileNameSelector, profileDescriptionSelector, elementsListSelector, config, popupEdit, buttonEditProfile, buttonAddElement, initialCards, formAdd, formEdit, popupImage, popupAdd, inputName, inputDescription }; 