const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const popupList = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_function_edit');
const profileJob = document.querySelector('.profile__description');
const closeButtonList = document.querySelectorAll('.popup__close-button');
const inputName = document.querySelector('.form_input_profile-name');
const inputDescription = document.querySelector('.form_input_description');
const formEdit = document.querySelector('.form_function_edit');
const elementsList = document.querySelector('.elements__list');
const popupAdd = document.querySelector('.popup_function_add');
const addButton = document.querySelector('.profile__add-button');
const inputCardName = document.querySelector('.form__input_name');
const inputCardImage = document.querySelector('.form_input_src');
const formAdd = document.querySelector('.form_function_add');
const popupImage = document.querySelector('.popup_function_image');
const popupImageSrc = document.querySelector('.popup__image');
const popupImageDescription = document.querySelector('.popup__image-description');
const templateElement = document.querySelector('#mesto').content;


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
    let clonedElement = getNode(templateElement, '.element').cloneNode(true);
    return clonedElement;
};
// Создаем новый элемент 
const createElement = (itemElementLink, itemElementName) => {
    let cardElement = cloneTemplate();
    getNode(cardElement, '.element__image').src = itemElementLink;
    getNode(cardElement, '.element__image').alt = itemElementName;
    getNode(cardElement, '.element__name').textContent = itemElementName;
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
    popupImageSrc.src = imageElement.getAttribute('src');
    popupImageSrc.alt = imageElement.getAttribute('src');
    popupImageDescription.textContent = imageElement.getAttribute('alt');
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
    itemCard.closest('.element').remove();
};

addButton.addEventListener('click', () => {
    openPopup(popupAdd);
});

formEdit.addEventListener('submit', handleFormSubmit);
formAdd.addEventListener('submit', (evt) => {
    appendElementViaPopup(evt);
    resetForm(formAdd);
});

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