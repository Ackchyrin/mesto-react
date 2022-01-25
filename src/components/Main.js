import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import api from "../utils/api";

function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getAboutUser(), api.getInitialCards()])
            .then(([user, card]) => {
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);
                setCards(card);
            })
            .catch(err => console.log(err))
    }, []);

    return(
        <>
            <main className="main" >
                <section className="profile">
                    <div className="profile__edit-avatar" onClick={props.onEditAvatar} >
                        <img className="profile__avatar" src={userAvatar} alt="Аватар профиля" />
                        <span className="profile__edit-pencile" ></span>
                    </div>
                    <div className="profile__info" >
                        <h1 className="profile__info-name" >{userName}</h1>
                        <p className="profile__info-about" >{userDescription}</p>
                        <button className="profile__info-button" type="button" onClick={props.onEditProfile} ></button>
                    </div>
                    <button className="profile__button" type="button" onClick={props.onAddPlace} ></button>
                </section>
                <section className="elements" >
                  {cards.map((card) => <Card key={card._id} {...card} onCard={props.onCardClick} />)}
                </section>
            </main>
        </>
    );
}

export default Main;
