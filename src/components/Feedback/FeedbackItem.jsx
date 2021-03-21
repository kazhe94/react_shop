import React from "react";

const FeedbackItem = (props) => {
    return (
        <li className="feedback__item">
            <h4 className="feedback__item-author">{props.name}</h4>
            {props.advantages ? <div className="feedback__item-block">
                <h6 className="feedback__item-title">Достоинства</h6>
                <p className="feedback__item-text">{props.text}</p>
            </div> : null}
            {props.disadvantages ? <div className="feedback__item-block">
                <h6 className="feedback__item-title">Недостатки</h6>
                <p className="feedback__item-text">{props.text}</p>
            </div> : null}
            {props.text ? <div className="feedback__item-block">
                <h6 className="feedback__item-title">Комментарий</h6>
                <p className="feedback__item-text">{props.text}</p>
            </div> : null}
            <time className="feedback__item-date">{props.date}</time>
        </li>
    )
}

export default FeedbackItem;