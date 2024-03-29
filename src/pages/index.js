import './index.css';
import Card from './../components/Card.js'
import FormValidator from './../components/FormValidator.js'
import PopupWithImage from './../components/PopupWithImage.js'
import Section from './../components/Section.js'
import PopupWithForm from './../components/PopupWithForm.js'
import UserInfo from './../components/UserInfo.js'
import Api from './../components/Api.js'
import PopupWithConfirmDelete from '../components/PopupWithConfirmDelete.js';

import { formEditAvatar, buttonEditAvatar, popupEditAvatar, profileAvatarSelector, popupDeleteConfirm, options, templateSelector, profileNameSelector, profileDescriptionSelector, elementsListSelector, config, buttonEditProfile, buttonAddElement, formAdd, formEdit, popupEdit, popupImage, popupAdd, inputName, inputDescription } from '../utils/constants.js'


let userId;
const api = new Api(options);


/* --------------------Валидация форм --------------*/
const cardAddFormValidation = new FormValidator(config, formAdd);
cardAddFormValidation.enableValidation();
const profileEditFormValidation = new FormValidator(config, formEdit)
profileEditFormValidation.enableValidation();
const avatarEditFormValidation = new FormValidator(config, formEditAvatar);
avatarEditFormValidation.enableValidation();


/* Работа с данными пользователя*/

const userInfo = new UserInfo({ userNameSelector: profileNameSelector, userDescriptionSelector: profileDescriptionSelector, userAvatarSelector: profileAvatarSelector });

/* Устанавливаем данные пользователя через API */

const popupWithEditForm = new PopupWithForm(popupEdit, (inputValues) => {
    popupWithEditForm.renderLoading(true);
    api.setUserInfoByAPI(inputValues)
        .then((data) => {
            popupWithEditForm.close()
            userInfo.setUserInfo(data)
        })
        .catch((error) => console.log(error))
        .finally(() => popupWithEditForm.renderLoading(false));

})


popupWithEditForm.setEventListeners();

buttonEditProfile.addEventListener('click', () => {
    const userData = userInfo.getUserInfo();
    inputName.value = userData.name;
    inputDescription.value = userData.description;
    popupWithEditForm.open();
})

/* -------------Изменяем аватар пользователя------------------------------- */


const poputWithEditAvatarForm = new PopupWithForm(popupEditAvatar, (inputValues) => {
    poputWithEditAvatarForm.renderLoading(true)
    api.setUserAvatarByAPI(inputValues)
        .then((data) => {
            poputWithEditAvatarForm.close();
            userInfo.setUserAvatar(data);

        })
        .catch((error) => console.log(error))
        .finally(() => poputWithEditAvatarForm.renderLoading(false))
})

poputWithEditAvatarForm.setEventListeners();

buttonEditAvatar.addEventListener('click', () => {
    avatarEditFormValidation.setInitialState();
    poputWithEditAvatarForm.open();
})

/* Работа с карточками */

const popupDelete = new PopupWithConfirmDelete(popupDeleteConfirm);
popupDelete.setEventListeners();

const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();

function handleCardClick(data) {
    popupWithImage.open(data);
}

const popupWithAddForm = new PopupWithForm(popupAdd, (inputValues) => {
    popupWithAddForm.renderLoading(true);
    api.addCard(inputValues)
        .then((data) => {
            const card = createCard(data);
            cardItemsList.addItem(card);
       
            popupWithAddForm.close();
         
        }).catch((error) => console.log(error))
        .finally(() => popupWithAddForm.renderLoading(false))
})
popupWithAddForm.setEventListeners();

buttonAddElement.addEventListener('click', () => {
    cardAddFormValidation.setInitialState();
    popupWithAddForm.open();
})

function handleCardDeleteConfirm(data, card) {
    popupDelete.open();
    popupDelete.setSubmitAction(() => {
        popupDelete.renderLoading(true)
        api.deleteCard(data._id)
            .then(() => {
                card.removeCard();
                popupDelete.close();
            })
            .catch((error) => console.log(error))
            .finally(() => popupDelete.renderLoading(false))
    });
}

function handleLikeClick(data, card) {
    if (!(card.likedByUser())) {
        api.setLike(card._id)
            .then((data) => {
                card.updateLikesCount(data.likes);
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        api.deleteLike(card._id)
            .then((data) => {
                card.updateLikesCount(data.likes);
            })
            .catch((err) => {
                console.log(err)
            });
    };
}

function createCard(data) {
    const card = new Card({
        data: data,
        handleCardClick,
        handleLikeClick: () => {
            handleLikeClick(data, card)
        },
        handleCardDelete: () => {
            handleCardDeleteConfirm(data, card)
        }
    }, templateSelector, userId);
    return card.generateCard();
}

const cardItemsList = new Section({
    renderer: (item) => {
        const card = createCard(item);
        cardItemsList.addItem(card);
    }
}, elementsListSelector);

api.getData()
    .then(([cards, userData]) => {
        userInfo.setUserInfo(userData);
        userId = userData._id;
        if (userData) {
            userInfo.setUserInfo(userData)
        }
        cardItemsList.renderItems(cards);
    })
    .catch((error) => {
        console.log(error)
    })









