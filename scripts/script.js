const listElementClasses = {
    "POPUPLIST": "popup",
    'EDITBUTTON': "profile__edit-button",
    "PROFILENAME": "profile__name",
    "POPUPEDIT": "popup_function_edit",
    "PROFILEDESCRIPTION": "profile__description",
    "CLOSEBUTTONLIST": "popup__close-button",
    "FORMEDIT": "form_function_edit",
    "ELEMENTSLIST": "elements__list",
    "POPUPADD": "popup_function_add",
    "ADDBUTTON": "profile__add-button",
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

const settings = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inputErrorClass: 'form__input_type-error',
    errorClass: 'form__input-error_active'
}

const popupList = document.querySelectorAll('.' + listElementClasses.POPUPLIST);
const popupImage = document.querySelector('.' + listElementClasses.POPUPIMAGE);
const popupAdd = document.querySelector('.' + listElementClasses.POPUPADD);
const popupEdit = document.querySelector('.' + listElementClasses.POPUPEDIT);
const popupImageSrc = document.querySelector('.' + listElementClasses.POPUPIMAGESRC);
const popupImageDescription = document.querySelector('.' + listElementClasses.POPUPIMAGEDESCRIPTION);
const formEdit = document.querySelector('.' + listElementClasses.FORMEDIT);
const formAdd = document.querySelector('.' + listElementClasses.FORMADD);

const addButton = document.querySelector('.' + listElementClasses.ADDBUTTON);
const editButton = document.querySelector('.' + listElementClasses.EDITBUTTON);
const closeButtonList = document.querySelectorAll('.' + listElementClasses.CLOSEBUTTONLIST);

const inputName = document.querySelector('input[name="username"]');
const inputDescription = document.querySelector('input[name="description"]');
const inputCardName = document.querySelector('input[name="cardName"]');
const inputCardSrc = document.querySelector('input[name="cardImageSrc"]');

const profileName = document.querySelector('.' + listElementClasses.PROFILENAME);
const profileJob = document.querySelector('.' + listElementClasses.PROFILEDESCRIPTION);

const templateElement = document.querySelector('#' + listElementClasses.TEMPLATELEMENT).content;
const elementList = document.querySelector('.' + listElementClasses.ELEMENTSLIST);
const saveCardButton = formAdd.querySelector('.form__submit-button');

const cloneTemplate = () => {
    const clonedElement = templateElement.querySelector('.' + listElementClasses.ELEMENT).cloneNode(true);
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
    document.addEventListener('keydown', (evt) => {
        escClickHandler(evt);
    });
}

const closePopup = (popupElement) => {
    popupElement.classList.remove('popup_opened');
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

const initClosePopupHandler = () => {
    closeButtonList.forEach((closeBtn) => {
        let popupElement = closeBtn.closest('.popup')
        closeBtn.addEventListener('click', () => {
            closePopup(popupElement);
        });
    })
}

const transferMetaDataToPopup = (elementImage) => {
    popupImageSrc.src = elementImage.getAttribute('src');
    popupImageSrc.alt = elementImage.getAttribute('alt');
    popupImageDescription.textContent = elementImage.getAttribute('alt');

}

const initPopupImageHandler = (elementImage) => {
    elementImage.addEventListener('click', () => {
        transferMetaDataToPopup(elementImage);
        openPopup(popupImage);
    });
}

const initTHisCard = (card) => {
    const likeButton = card.querySelector('.' + listElementClasses.ELEMENTLIKE);
    const deleteButton = card.querySelector('.' + listElementClasses.ElEMENTDELETE);
    const elementImage = card.querySelector('.' + listElementClasses.ELEMENTIMAGE);

    initPopupImageHandler(elementImage);
    initLikeButtonClickHandler(likeButton);
    initDeleteButtonClickHandler(deleteButton);
}

const createCard = (initCardName, initCardSrc) => {
    const card = cloneTemplate();
    card.querySelector('.' + listElementClasses.ELEMENTIMAGE).src = initCardSrc;
    card.querySelector('.' + listElementClasses.ELEMENTNAME).textContent = initCardName;
    card.querySelector('.' + listElementClasses.ELEMENTIMAGE).alt = initCardName;
    initTHisCard(card);
    return card;
};

const renderCard = (cardName, cardSrc) => {
    elementList.prepend(createCard(cardName, cardSrc));
}

initialCards.forEach((cardItem) => {
    renderCard(cardItem.name, cardItem.link);
});

initClosePopupHandler();


const transferMetaDataToInput = () => {
    inputName.value = profileName.textContent.trim();
    inputDescription.value = profileJob.textContent.trim();
};

addButton.addEventListener('click', () => {
    openPopup(popupAdd);
})
editButton.addEventListener('click', () => {
    transferMetaDataToInput();
    openPopup(popupEdit);
})

const handleEditFormSubmit = (evt) => {
    evt.preventDefault();
    profileName.textContent = getInputValue(inputName);
    profileJob.textContent = getInputValue(inputDescription);
    const popupElement = document.querySelector('.popup_opened');
    closePopup(popupElement);
};

const handleRenderCard = (evt) => {
    evt.preventDefault();
    renderCard(getInputValue(inputCardName), getInputValue(inputCardSrc));
    const popupElement = document.querySelector('.popup_opened');
    closePopup(popupElement);
}

formAdd.addEventListener('submit', (evt) => {
    handleRenderCard(evt);
    resetForm(formAdd);
});

formEdit.addEventListener('submit', handleEditFormSubmit);

const overlayClickHandler = (evt) => {
    if (evt.target.classList.contains('popup')) {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
}

const escClickHandler = (evt) => {
    if (evt.key === "Escape") {
        const popupElement = document.querySelector('.popup_opened');
        closePopup(popupElement);
    }
}

popupList.forEach((popupElement) => {
    popupElement.addEventListener('mousedown', overlayClickHandler);
})

if (inputCardName.value === undefined) {
    alert('пусто')
}
enableValidation(settings);
