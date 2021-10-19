const popup = document.querySelector('.popup');
const popupContainer = popup.querySelector('.popup__container');
const popupForm = popup.querySelector('.popup__form');
const nameInput = popupContainer.querySelector('.popup__item_type_name');
const workInput = popupContainer.querySelector('.popup__item_type_work');
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileWork = profile.querySelector('.profile__work');
const editButton = profile.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__button_type_close');

function openPopup() {
  popup.classList.add('popup_open');
  nameInput.value = profileName.textContent;
  workInput.value = profileWork.textContent;
}

function handleProfileFormSubmit(evt) {
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
popupForm.addEventListener('submit', handleProfileFormSubmit);