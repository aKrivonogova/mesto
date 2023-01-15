
let editButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');
let popup = document.querySelector('.popup');
let profileDescriptionJob = document.querySelector('.profile__description');
let closeButton = document.querySelector('.popup__close-button');
let inputName = document.getElementById('userName');
let inputDescription = document.getElementById('userJobDescription');
let form = document.querySelector('.form');

// Вносим данные из верстки в инпуты и убираем лишние пробелы 
function fillInputsData() {
    inputName.value = profileName.textContent.trim();
    inputDescription.value = profileDescriptionJob.textContent.trim();
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileDescriptionJob.textContent = inputDescription.value;
    closePopup();
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function openPopup() {
    fillInputsData();
    popup.classList.add('popup_opened');
}


form.addEventListener('submit', handleFormSubmit);
closeButton.addEventListener('click', closePopup);
editButton.addEventListener('click', openPopup);

