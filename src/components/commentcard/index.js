import React from 'react';
import css from './style.module.css';
import { AvatarUrl } from '../../default-url';
import defaultavatar from '../../images/default-avatar.png';

const CommentCard = (props) =>  {
    const { comment } = props;
    // console.log('-->',comment);
    return(
        <div className={css.box}>
            <div>
                {comment.user.avatar ? 
                <img src={`${AvatarUrl}${comment.user.avatar}`} alt='user'/>
                : <img src={defaultavatar} alt='default'/>
                
            }
            </div>
            <div>
                <p>{`"${comment.message}"`}</p>
                <h5>- {comment.name}</h5>
                <p>{comment.lesson_section.name} хичээлийн суралцагч</p>
            </div>
        </div>
    )
}
export default CommentCard;