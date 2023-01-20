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

const fillTemplateFromArray = (listItem) => {
    let cardElement = cloneTemplate();
    getElementVelue(cardElement, '.element__name').textContent = listItem.name;
    getElementVelue(cardElement, '.element__image').src = listItem.link;
    return cardElement;
};

const getElementVelue = (element, className) => {
    return element.querySelector(`${className}`);
}

const fillTemplateEnteredData = () => {
    let cardElement = cloneTemplate();
    getElementVelue(cardElement, '.element__name').textContent = getInputValue(inputCardName);
    getElementVelue(cardElement, '.element__image').src = getInputValue(inputCardImage);
    return cardElement;
}


const cloneTemplate = () => {
    let templateCard = getElementVelue(document, '#mesto').content;
    let cardElement = getElementVelue(templateCard, '.element').cloneNode(true);
    return cardElement;
};

const getInputValue = (inputElement) => {
    return inputElement.value;
}

const deleteCard = (itemCard) => {
    itemCard.parentNode.remove;
}

const addCardToList = (evt) => {
    evt.preventDefault();
    elementsList.prepend(fillTemplateEnteredData());
    closePopup();
}

initialCards.forEach((listItem) => {
    elementsList.append(fillTemplateFromArray(listItem));
});

const fillInputsData = () => {
    inputName.value = profileName.textContent.trim();
    inputDescription.value = profileJob.textContent.trim();
}

const handleFormSubmit = (evt) => {
    evt.preventDefault();
    profileName.textContent = getInputValue(inputName);
    profileJob.textContent = getInputValue(inputDescription);
    closePopup();
};

const likeCard = (likeItem) => {
    likeItem.classList.toggle('element__like_active');
}

elementsList.querySelectorAll('.element__delete').forEach((item) => {
    item.addEventListener('click', () => {
        deleteCard(item);
    })
})

elementsList.querySelectorAll('.element__like').forEach((likeItem) => {
    likeItem.addEventListener('click', () => {
        likeCard(likeItem);
    });
});

const closePopup = () => {
    popupList.forEach((popupElement) => {
        popupElement.classList.remove('popup_opened');
    });
};

const openPopup = (popupElement) => {
    popupElement.classList.add('popup_opened');
};

form.addEventListener('submit', handleFormSubmit);

closeButtonList.forEach((buttonItem) => {
    buttonItem.addEventListener('click', closePopup);
});

editButton.addEventListener('click', () => {
    fillInputsData();
    openPopup(popupEdit)
});

addButton.addEventListener('click', () => {
    openPopup(popupAdd);
});

formAdd.addEventListener('submit', addCardToList); 