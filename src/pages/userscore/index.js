import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import css from './style.module.css';

const UserScore = () => {
    
    let location = useLocation();
    const points = location.state;
    console.log(points);
    return(
        <div className={css.page}>
            <div className={css.container}>
                    <div> Та {points.totalpoint} онооноос {points.userpoint} оноо авлаа</div>
                    <div className={css.button}>
                        <Link to='/'>
                            Нүүр хуудас руу шилжих
                        </Link>
                    </div>
            </div>
        </div>
    )
}
export default UserScore;