import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../images/favicon-32x32.png'
import css from './style.module.css'
const Logo = ()=> {

    return (
        <Link to="/">
        <div className={css.logo}>
            <img src={image} alt="logo"/>
        </div>
        </Link>
    );
}

export default Logo;