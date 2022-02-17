import React, { useEffect, useState } from 'react';
import PaymentLessonCard from '../paymentlessoncard';
import css from './style.module.css';

const PaymentLesson = (props) => {
    const [lessons, setLessons] = useState([]);
    const [current, setCurrent] = useState([]);

    const LoadLesson = () => {
        const { lesson } = props;
        setLessons(lesson);
        setCurrent(lesson);
    }
    useEffect(() => {
        if(current !== props){
            LoadLesson();
        }
        if (lessons.length > 0){
            return;
        }
        LoadLesson();
    });
    return(
        <div className={css.page}>
            <div className={css.container}>

                {lessons.map((lesson, i) => 
                    <div  className={css.box}  key={`${i}${lesson.name}`} >
                        <PaymentLessonCard lesson={lesson} />
                    </div>
                )}

            </div>
        </div>
    );
}
export default PaymentLesson;