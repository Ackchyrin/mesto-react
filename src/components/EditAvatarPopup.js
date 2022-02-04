import React, { createRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const refInput = createRef();

    function handleSubmit(e) {
        e.preventDefault();
        const link = refInput.current.value;
        props.onUpdateAvatar({
            avatar: link,
        });
    }

    return (
        <PopupWithForm
            title='Сменить аватар'
            name='avatar'
            isOpen={props.isOpen}
            onClose={props.onClose}
            btnText='Сохранить'
            onSubmitForm={handleSubmit}
        >
            <div className="popup__form">
                <input
                    className="popup__input popup__input_avatar"
                    type="url"
                    id="avatar"
                    name="avatar"
                    placeholder="Ссылка на аватар"
                    ref={refInput}
                    required
                />
                <span className="error" id="avatar-error"></span>
            </div>
        </PopupWithForm>
    );

}

export default EditAvatarPopup;
