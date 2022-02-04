import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props){
    const refInputName = useRef(null);
    const refInputLink = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();

        const inputDataName = refInputName.current.value;
        const inputDataLink = refInputLink.current.value;

        props.onAddPlace({
            name: inputDataName,
            link: inputDataLink
        });
    }

    return(
        <PopupWithForm
            title='Новое место'
            name='add'
            isOpen={props.isOpen}
            onClose={props.onClose}
            btnText='Создать'
            creation='Создание...'
            onSubmitForm={handleSubmit}
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
            ref={refInputName}
            required
          />
          <span className="error" id="card-error"></span>
          <input
            className="popup__input popup__input_link"
            type="url"
            id="link"
            name="link"
            placeholder="Ссылка на картинку"
            ref={refInputLink}
            required
          />
          <span className="error error_second" id="link-error"></span>
        </div>
        </PopupWithForm>
    )
}

export default AddPlacePopup;
