import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import css from './style.module.css';

const Zannen = () => {
    
    let location = useLocation();
    const points = location.state;
    console.log(points);
    return(
        <div className={css.page}>
            <div className={css.container}>
                    <div> Та энэ шалгалтыг өмнө нь өгсөн байна.</div>
                    <div className={css.button}>
                        <Link to='/'>
                            Нүүр хуудас руу шилжих
                        </Link>
                    </div>
            </div>
        </div>
    )
}
export default Zannen;