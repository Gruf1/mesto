const popup = document.querySelector('.popup');
const popupContainer = popup.querySelector('.popup__container');
let nameInput = popupContainer.querySelector('.popup__item_name');
let workInput = popupContainer.querySelector('.popup__item_work');
const profile = document.querySelector('.profile');
let profileName = profile.querySelector('.profile__name');
let profileWork = profile.querySelector('.profile__work');
const editButton = profile.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__button_close');

function openPopup() {
  popup.classList.add('popup_open');
  nameInput.value = profileName.textContent;
  workInput.value = profileWork.textContent;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileWork.textContent = workInput.value;
  closePopup();
}

function closePopup() {
  popup.classList.remove('popup_open');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
popupContainer.addEventListener('submit', formSubmitHandler);