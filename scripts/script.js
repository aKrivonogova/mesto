let editButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');
let popupList = document.querySelectorAll('.popup');
let popupEdit = document.getElementById('popup_edit');
let profileJob = document.querySelector('.profile__description');
let closeButtonList = document.querySelectorAll('.popup__close-button');
let inputName = document.getElementById('userName');
let inputDescription = document.getElementById('userJobDescription');
let form = document.querySelector('.form');
let elementsList = document.querySelector('.elements__list');
let popupAdd = document.getElementById('popup_add');
let addButton = document.getElementById('profile__add-button');
let inputCardName = document.getElementById('cardName');
let inputCardImage = document.getElementById('cardImageSrc');
let formAdd = document.getElementById('formAdd');
let formEdit = document.getElementById('formEdit');
let popupImage = document.getElementById('popup-image');
let popupImageSrc = document.querySelector('popup__image');
let popupImageDescription = document.querySelector('.popup__image-description');


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

// получаем узел 
const getNode = (element, className) => {
    return element.querySelector(`${className}`);
};

// Получаем данные из инпута
const getInputValue = (inputElement) => {
    return inputElement.value;
};

// Клонируем template
const cloneTemplate = () => {
    let templateElement = getNode(document, '#mesto').content;
    let clonedElement = getNode(templateElement, '.element').cloneNode(true);
    return clonedElement;
};
// Создаем новый элемент 
const createElement = (itemElementLink, itemElementName) => {
    let cardElement = cloneTemplate();
    getNode(cardElement, '.element__image').src = itemElementLink;
    getNode(cardElement, '.element__image').alt = itemElementName;
    getNode(cardElement, '.element__name').textContent = itemElementName;
    resetForm(formAdd);
    return cardElement;
}
// Добавляем на страницу карточки с данными из массива 
const appendElementsFromArray = () => {
    initialCards.forEach((elementItem) => {
        elementsList.append(createElement(elementItem.link, elementItem.name));
    });
};
// Очищаем форму 
const resetForm = (form) => {
    form.reset();
}

appendElementsFromArray();

// Заполняем инпуты попапа данными профиля 
const fillInputsData = () => {
    inputName.value = profileName.textContent.trim();
    inputDescription.value = profileJob.textContent.trim();
}

// Изменение данных профиля 
const handleFormSubmit = (evt) => {
    evt.preventDefault();
    profileName.textContent = getInputValue(inputName);
    profileJob.textContent = getInputValue(inputDescription);
    closePopup();
};

// Добавляем новую карточку на страницу 
const appendElementViaPopup = (evt) => {
    evt.preventDefault();
    elementsList.prepend(createElement(getInputValue(inputCardImage), getInputValue(inputCardName)));
    closePopup();
};

// Заполняем попап с картинкой данными из элемента 
const fiillPopupImage = (imageElement) => {
    popupImage.querySelector('.popup__image').src = imageElement.getAttribute('src');
    popupImage.querySelector('.popup__image-description').textContent = imageElement.getAttribute('alt');
};

// Открытие попапа
const openPopup = (popupElement) => {
    popupElement.classList.add('popup_opened');
};
// Закрытие попапа
const closePopup = () => {
    popupList.forEach((popupElement) => {
        popupElement.classList.remove('popup_opened');
    });
};
// Лайк для карточки 
const likeCard = (likeItem) => {
    likeItem.classList.toggle('element__like_active');
}
// Удалить карточку
const deleteCard = (itemCard) => {
    itemCard.parentElement.remove();
};

addButton.addEventListener('click', () => {
    openPopup(popupAdd);
});

formEdit.addEventListener('submit', handleFormSubmit);
formAdd.addEventListener('submit', appendElementViaPopup);

editButton.addEventListener('click', () => {
    fillInputsData();
    openPopup(popupEdit);
})

closeButtonList.forEach((itemButton) => {
    itemButton.addEventListener('click', closePopup);
});

elementsList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('element__like')) {
        likeCard(evt.target);
    };
    if (evt.target.classList.contains('element__delete')) {
        deleteCard(evt.target);
    };
    if (evt.target.classList.contains('element__image')) {
        fiillPopupImage(evt.target);
        openPopup(popupImage);
    }
});





