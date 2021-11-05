const popupContainer = document.querySelector('.popup__container');
const elementSection = document.querySelector('.elements');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector('.popup_type_image');
const profile = document.querySelector('.profile');
const cardsContainer = document.querySelector('.elements__list');
const profileForm = document.querySelector('.popup__form');
const newCardForm = popupAddCard.querySelector('.popup__form');
const nameInput = popupContainer.querySelector('.popup__item_type_name');
const workInput = popupContainer.querySelector('.popup__item_type_work');
const profileName = profile.querySelector('.profile__name');
const profileWork = profile.querySelector('.profile__work');
const editButton = profile.querySelector('.profile__edit-button');
const addButton = profile.querySelector('.profile__add-button')
const closeButtonProfile = document.querySelector('.popup__button_type_close');
const closeButtonAddCard = popupAddCard.querySelector('.popup__button_type_close');
const image = popupImage.querySelector('.popup__image');
const imageCaption = popupImage.querySelector('.popup__caption');
const closeButtonImage = popupImage.querySelector('.popup__button_type_close');
const title = document.querySelector('.popup__item_type_title');
const picture = document.querySelector('.popup__item_type_link');

const initialCards = [
  {
    name: 'Thomas Mraz',
    link: 'https://www.sobaka.ru/images/image/01/37/34/73/_normal.jpg'
  },
  {
    name: 'Spirit TI10 Champions',
    link: 'https://hb.bizmrg.com/cybersportru-media/43/43333e4d2d3856d754fd9cc0143b0a3a.jpg'
  },
  {
    name: 'Metro 2033',
    link: 'https://i.pinimg.com/originals/67/fe/e9/67fee9f81bc64485717e77cea285a5cd.jpg'
  },
  {
    name: 'My favorite film',
    link: 'https://cdn.smartfacts.ru/215225/interstellar_0.jpg'
  },
  {
    name: 'Fnatic are Champions',
    link: 'https://egamersworld.com/uploads/news/1520280638409-1.jpg'
  },
  {
    name: 'Oxxymiron',
    link: 'https://lastfm.freetls.fastly.net/i/u/770x0/f644836eef0c2c048c30079c842c9a57.jpg'
  }
]; 

function renderCard() {
  initialCards.forEach((item) => {
    createCard(item.name, item.link);
  });
}
renderCard();

function getCard(cardTitle, cardLink) {
  const cardTemplate = document.querySelector('.card-template').content;
  const card = cardTemplate.querySelector('.elements__card').cloneNode(true);
  const image = card.querySelector('.elements__pic');

  card.querySelector('.elements__title').textContent = cardTitle;
  image.src = cardLink;

  const deleteButton = card.querySelector('.elements__delete-button');
  deleteButton.addEventListener('click', function(evt) {
    evt.target.closest('.elements__card').remove();
  });

  const likeButton = card.querySelector('.elements__like-button');
  likeButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('elements__like-button_active');
  });

  image.addEventListener('click', () => {
    image.src = cardLink;
    imageCaption.textContent = cardTitle;
    openPopup(popupImage);
  });
  return card;
}

function createCard(cardTitle, cardLink) {
  const card = getCard(cardTitle, cardLink);
  cardsContainer.prepend(card);
}

function addCard(evt) {
  evt.preventDefault();

  createCard(title.value, picture.value);

  title.value = '';
  picture.value = '';
  closePopup(popupAddCard);
}

function openPopup(popup) {
  popup.classList.add('popup_open');
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileWork.textContent = workInput.value;
  closePopup(popupProfileEdit);
}

function closePopup(popup) {
  popup.classList.remove('popup_open');
}

newCardForm.addEventListener('submit', addCard);
profileForm.addEventListener('submit', handleProfileFormSubmit);
addButton.addEventListener('click', () => openPopup(popupAddCard));
editButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  workInput.value = profileWork.textContent;
  openPopup(popupProfileEdit)
});
closeButtonProfile.addEventListener('click', () => closePopup(popupProfileEdit));
closeButtonAddCard.addEventListener('click', () => closePopup(popupAddCard));
closeButtonImage.addEventListener('click', () => closePopup(popupImage));