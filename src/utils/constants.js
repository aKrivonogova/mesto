const popupImage = document.querySelector('.popup_function_image');
const popupEditAvatar = document.querySelector('.popup_function_avatar-edit');
const popupAdd = document.querySelector('.popup_function_add');
const popupEdit = document.querySelector('.popup_function_edit');
const popupDeleteConfirm = document.querySelector('.popup_function_delete');
const formEdit = document.querySelector('.form_function_edit')
const formEditAvatar = document.querySelector('.form_function_edit-avatar');
const inputName = formEdit.querySelector('input[name="name"]');
const inputDescription = formEdit.querySelector('input[name="description"]');
const formAdd = document.querySelector('.form_function_add');
const buttonEditProfile = document.querySelector('.profile__edit-button')
const buttonAddElement = document.querySelector('.profile__add-button');
const buttonEditAvatar = document.querySelector('.profile__avatar-edit-button');
const templateSelector = 'mesto';
const elementsListSelector = '.elements__list';
const profileNameSelector = '.profile__name';
const profileDescriptionSelector = '.profile__description'
const profileAvatarSelector = '.profile__avatar';

const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inputErrorClass: 'form__input_type-error',
    errorClass: 'form__input-error_active'
}

const options = {
    url: 'https://mesto.nomoreparties.co/v1/cohort-61',
    headers: {
        authorization: 'bfd84cb4-18b1-46f8-b826-36dbd379cdad',
        'Content-Type': 'application/json'
    }
};


export { formEditAvatar, buttonEditAvatar, popupEditAvatar, profileAvatarSelector, popupDeleteConfirm, options, templateSelector, profileNameSelector, profileDescriptionSelector, elementsListSelector, config, popupEdit, buttonEditProfile, buttonAddElement, formAdd, formEdit, popupImage, popupAdd, inputName, inputDescription }; 