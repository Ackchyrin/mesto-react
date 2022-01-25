import React from "react";

function Card(props){
    function handleClick(){
        props.onCard(props);
    }

    return(
        <article className="element">
            <img className="element__image" src={props.link} alt={props.name} onClick={handleClick} />
            <div className="element__about">
                <h2 className="element__description">{props.name}</h2>
                <div>
                   <button type="button" className="element__like"></button>
                   <p className="element__check">{props.likes.length}</p>
                </div>
                <button className="element__delete"></button>
            </div>
        </article>
    );
}

export default Card;
