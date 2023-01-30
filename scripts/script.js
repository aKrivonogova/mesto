const listElementSelectors = {
    "POPUPLIST": "popup",
    'EDITBUTTON': "profile__edit-button",
    "PROFILENAME": "profile__name",
    "POPUPEDIT": "popup_function_edit",
    "PROFILEDESCRIPTION": "profile__description",
    "CLOSEBUTTONLIST": "popup__close-button",
    "INPUTNAME": "form__input_profile-name",
    "INPUTDESCRIPTION": "form__input_description",
    "FORMEDIT": "form_function_edit",
    "ELEMENTSLIST": "elements__list",
    "POPUPADD": "popup_function_add",
    "ADDBUTTON": "profile__add-button",
    "INPUTCARDNAME": "form__input_name",
    "INPUTCARDIMAGE": "form__input_src",
    "FORMADD": "form_function_add",
    "POPUPIMAGE": "popup_function_image",
    "POPUPIMAGESRC": "popup__image",
    "POPUPIMAGEDESCRIPTION": "popup__image-description",
    "TEMPLATELEMENT": "mesto",
    "ELEMENT": "element",
    "ELEMENTIMAGE": "element__image",
    "ELEMENTNAME": "element__name",
    "ELEMENTLIKE": "element__like",
    "ElEMENTDELETE": "element__delete"
}

const templateElement = document.querySelector('#' + listElementSelectors.TEMPLATELEMENT).content;
const elementList = document.querySelector('.' + listElementSelectors.ELEMENTSLIST);
const popupImage = document.querySelector('.' + listElementSelectors.POPUPIMAGE);
const popupAdd = document.querySelector('.' + listElementSelectors.POPUPADD);
const addButton = document.querySelector('.' + listElementSelectors.ADDBUTTON);
const inputCardName = document.querySelector('.' + listElementSelectors.INPUTCARDNAME);
const inputCardSrc = document.querySelector('.' + listElementSelectors.INPUTCARDIMAGE);
const formAdd = document.querySelector('.' + listElementSelectors.FORMADD);
const closeButtonList = document.querySelectorAll('.' + listElementSelectors.CLOSEBUTTONLIST);
const popupList = document.querySelectorAll('.' + listElementSelectors.POPUPLIST);
const popupEdit = document.querySelector('.' + listElementSelectors.POPUPEDIT);
const editButton = document.querySelector('.' + listElementSelectors.EDITBUTTON);
const profileName = document.querySelector('.' + listElementSelectors.PROFILENAME);
const profileJob = document.querySelector('.' + listElementSelectors.PROFILEDESCRIPTION);
const inputName = document.querySelector('.' + listElementSelectors.INPUTNAME);
const inputDescription = document.querySelector('.' + listElementSelectors.INPUTDESCRIPTION);
const formEdit = document.querySelector('.' + listElementSelectors.FORMEDIT);
const popupImageSrc = document.querySelector('.' + listElementSelectors.POPUPIMAGESRC);
const popupImageDescription = document.querySelector('.' + listElementSelectors.POPUPIMAGEDESCRIPTION);

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

const cloneTemplate = () => {
    const clonedElement = templateElement.querySelector('.' + listElementSelectors.ELEMENT).cloneNode(true);
    return clonedElement
};

const getInputValue = (inputElement) => {
    return inputElement.value;
}

const resetForm = (form) => {
    form.reset();
}
const openPopup = (popupElement) => {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', escClickHandler);
    popupElement.addEventListener('mousedown', overlayClickHandler);
}

const closePopup = () => {
    popupList.forEach((popupElement) => {
        popupElement.classList.remove('popup_opened');
        popupElement.removeEventListener('mousedown', overlayClickHandler);
    });
    
    document.removeEventListener('keydown', escClickHandler);
}

const initLikeButtonClickHandler = (likeButton) => {
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('element__like_active');
    });
};

const initDeleteButtonClickHandler = (deleteButton) => {
    deleteButton.addEventListener('click', () => {
        deleteButton.closest('.element').remove();
    });
};

const initOpnePopupHandler = (popupTrigger, popupElement) => {
    popupTrigger.addEventListener('click', () => {
        openPopup(popupElement);
    });
};

const initClosePopupHandler = () => {
    closeButtonList.forEach((closeBtn) => {
        closeBtn.addEventListener('click', closePopup);
    })
}

const transferMetaDataToPopup = (elementImage) => {
    popupImageSrc.src = elementImage.getAttribute('src');
    popupImageDescription.textContent = elementImage.getAttribute('alt');
}

const initPopupImageHandler = (elementImage) => {
    elementImage.addEventListener('click', () => {
        transferMetaDataToPopup(elementImage);
        openPopup(popupImage);
    });
}

const initTHisCard = (card) => {
    const likeButton = card.querySelector('.' + listElementSelectors.ELEMENTLIKE);
    const deleteButton = card.querySelector('.' + listElementSelectors.ElEMENTDELETE);
    const elementImage = card.querySelector('.' + listElementSelectors.ELEMENTIMAGE);

    initPopupImageHandler(elementImage);
    initLikeButtonClickHandler(likeButton);
    initDeleteButtonClickHandler(deleteButton);
}

const createCard = (destination, initCardName, initCardSrc) => {
    const card = cloneTemplate();
    card.querySelector('.' + listElementSelectors.ELEMENTIMAGE).src = initCardSrc;
    card.querySelector('.' + listElementSelectors.ELEMENTNAME).textContent = initCardName;
    card.querySelector('.' + listElementSelectors.ELEMENTIMAGE).alt = initCardName;
    destination.prepend(card);
    initTHisCard(card);
};

initialCards.forEach((cardItem) => {
    createCard(elementList, cardItem.name, cardItem.link);
});

initOpnePopupHandler(addButton, popupAdd);
initOpnePopupHandler(editButton, popupEdit);
initClosePopupHandler();

const addCardToPage = (evt) => {
    evt.preventDefault();
    createCard(elementList, getInputValue(inputCardName), getInputValue(inputCardSrc));
    closePopup();
}

const transferMetaDataToInput = () => {
    inputName.value = profileName.textContent.trim();
    inputDescription.value = profileJob.textContent.trim();
};

transferMetaDataToInput();

const handleFormSubmit = (evt) => {
    evt.preventDefault();
    profileName.textContent = getInputValue(inputName);
    profileJob.textContent = getInputValue(inputDescription);
    closePopup();
};

formAdd.addEventListener('submit', (evt) => {
    addCardToPage(evt);
    resetForm(formAdd);
});

formEdit.addEventListener('submit', handleFormSubmit);

const overlayClickHandler = (evt) => {
    if (evt.target.classList.contains('popup')) {
        closePopup();
    }
}
const escClickHandler = (evt) => {
    if (evt.key === "Escape") {
        closePopup();
    }
}

