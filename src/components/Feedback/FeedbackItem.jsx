import React from "react";

const FeedbackItem = (props) => {
    return (
        <div className="feedback__item">
            <h5 className="feedback__item-name">{props.name}</h5>
            <p className="feedback__item-text">{props.text}</p>
            <time className="feedback__item-date">{props.date}</time>
        </div>
    )
}

export default FeedbackItem;