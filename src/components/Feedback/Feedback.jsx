import React, {useState} from "react";
import store from "../../store/store";
import './feedback.scss'
import {observer} from "mobx-react-lite";
import FeedbackItem from "./FeedbackItem";

const Feedback = observer((props) => {
    const [showForm, setShowForm] = useState(false)
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const submitFeedback = async (e) => {
        e.preventDefault()
        await store.sendFeedback({
            id: props.id,
            name,
            text
        })
        setText('')
        setName('')
        setShowForm(false)
    }

    return (
        <div className="feedback">
            <div className="feedback__inner">
                <div className="feedback__top">
                    <h3>Отзывы</h3>
                    <button className="btn" onClick={() => setShowForm(!showForm)}>Оставить отзыв</button>
                </div>
                <div className="feedback__body">
                    {
                        showForm ?
                            <form className={'feedback__form'}>
                                <legend>Оставьте свой отзыв о товаре</legend>
                                <div className="form-control">
                                    <label htmlFor="name-input">Как вас зовут?</label>
                                    <input type="text" id={'name-input'} value={name} onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="body-input">Текст отзыва</label>
                                    <textarea id="body-input" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                                </div>
                                <button className="btn" onClick={submitFeedback}>Отправить</button>
                            </form>
                            : null
                    }
                    {
                        props.feedback.length !== 0 ?
                            <ul>
                                {props.feedback.map(f => {
                                    return <FeedbackItem key={f.id} {...f}/>
                                })}
                            </ul>
                            : <div>Отзывов пока нет, вы можете быть первым</div>
                    }

                </div>
            </div>
        </div>
    )
})

export default Feedback;