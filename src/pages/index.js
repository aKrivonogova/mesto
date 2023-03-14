import './index.css';
import Card from './../components/Card.js'
import FormValidator from './../components/FormValidator.js'
import PopupWithImage from './../components/PopupWithImage.js'
import Section from './../components/Section.js'
import PopupWithForm from './../components/PopupWithForm.js'
import UserInfo from './../components/UserInfo.js'

import { templateSelector, profileNameSelector, profileDescriptionSelector, elementsListSelector, config, buttonEditProfile, buttonAddElement, initialCards, formAdd, formEdit, popupEdit, popupImage, popupAdd, inputName, inputDescription } from '../utils/constants.js'

const cardAddFormValidation = new FormValidator(config, formAdd);
cardAddFormValidation.enableValidation();
const profileEditFormValidation = new FormValidator(config, formEdit)
profileEditFormValidation.enableValidation();

const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();

function createCard(data) {
    return new Card({
        data: data, handleCardClick: () => {
            popupWithImage.open(data)
        }
    }, templateSelector).generateCard();
}

const cardItemsList = new Section({
    items: initialCards, renderer: (item) => {
        const card = createCard(item);
        cardItemsList.addItem(card);
    }
}, elementsListSelector);

cardItemsList.renderItems();

const popupWithAddForm = new PopupWithForm(popupAdd, (inputValues) => {
    const card = createCard(inputValues);
    cardItemsList.addItem(card);
})

popupWithAddForm.setEventListeners();

buttonAddElement.addEventListener('click', () => {
    popupWithAddForm.open();
})

const userInfo = new UserInfo({ userNameSelector: profileNameSelector, userDescriptionSelector: profileDescriptionSelector });

const popupWithEditForm = new PopupWithForm(popupEdit, (inputValues) => {
    userInfo.setUserInfo(inputValues.username, inputValues.description);
})
popupWithEditForm.setEventListeners();

buttonEditProfile.addEventListener('click', () => {
    const userData = userInfo.getUserInfo();
    inputName.value = userData.name;
    inputDescription.value = userData.description;
    popupWithEditForm.open();
})
