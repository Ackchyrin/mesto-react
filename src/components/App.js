import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isViewOpen, setViewOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setViewOpen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setViewOpen(true);
  }

  return (
   <>
   <Header />
   <Main 
     onEditProfile={() => setEditProfilePopupOpen(true)}
     onAddPlace={() => setAddPlacePopupOpen(true)}
     onEditAvatar={() => setEditAvatarPopupOpen(true)}
     onCardClick={(item) => handleCardClick(item)}
   />
   <Footer />
   <PopupWithForm
        title='Редактировать профиль'
        name='edit'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        btnText='Сохранить'
      >
        <div className="popup__form">
          <input
            className="popup__input popup__input_name"
            id="name"
            type="text"
            name="nametype"
            placeholder="Введите ваше имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="error" id="name-error"></span>
          <input
            className="popup__input popup__input_about"
            type="text"
            id="job"
            name="job"
            placeholder="Введите вашу профессию"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="error error_second" id="job-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        title='Новое место'
        name='add'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        btnText='Создать'
      >
        <div className="popup__form">
          <input
            className="popup__input popup__input_title"
            type="text"
            id="card"
            name="card"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="error" id="card-error"></span>
          <input
            className="popup__input popup__input_link"
            type="url"
            id="link"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="error error_second" id="link-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        title='Сменить аватар'
        name='avatar'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        btnText='Сменить'>
        <div className="popup__form">
          <input
            className="popup__input popup__input_avatar"
            type="url"
            id="avatar"
            name="avatar"
            placeholder="Ссылка на аватар"
            required
          />
          <span className="error" id="avatar-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        title='Вы уверены?'
        name='delete'
        btnText='Да' />
        <ImagePopup
        card={selectedCard}
        view={isViewOpen}
        onClose={closeAllPopups}
      />
      </>
  );
}

export default App;
