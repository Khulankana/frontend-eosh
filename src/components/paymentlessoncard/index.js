import React from 'react';

import css from './style.module.css';
import image from '../../images/android-chrome-512x512.png'
import {FileUrl} from '../../default-url';
import { useNavigate } from 'react-router-dom';

const PaymentLessonCard =  (props) => {
    const {lesson} = props;
    let navigate = useNavigate();
    const Clickhandler = () => {
        // navigate('/lessons/showlesson', {state: lesson});
        alert('hudaldaj avna uu');
    }
    return (
        <div className={css.box} onClick={Clickhandler}>
            <div className={css.boximage}>
                {lesson.image ? 
                <img src={`${FileUrl}${lesson.image}`} alt='box' />
                : <img src={image} alt='box' />}
            </div>
            <div className={css.boxtext}>
                <h3>{lesson.name}</h3>
                <p>{lesson.description}</p>
                <p>{lesson.category.name}</p>
            </div>
        </div>
    );
}
export default PaymentLessonCard;