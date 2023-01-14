
let editButtom = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');
let popup = document.querySelector('.popup');
let profileDescriptionJob = document.querySelector('.profile__description');
let closeButton = document.querySelector('.popup__close-button');
let inputProfileName = document.getElementById('userName');
let inputDescriptionJob = document.getElementById('userJobDescription');
let saveDataButton = document.getElementById('saveButton');
let elemetsList = document.querySelector('.elements__list');

inputProfileName.value = profileName.textContent.trim();
inputDescriptionJob.value = profileDescriptionJob.textContent.trim();

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputProfileName.value;
    profileDescriptionJob.textContent = inputDescriptionJob.value;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function openPopup() {
    popup.classList.add('popup_opened');
}

elemetsList.querySelectorAll('.element__like').forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('element__like_active')
    })
});

saveDataButton.addEventListener('click', handleFormSubmit);
closeButton.addEventListener('click', closePopup);
editButtom.addEventListener('click', openPopup);

