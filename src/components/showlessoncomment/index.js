import React from "react";
import css from "./style.module.css";
import { AvatarUrl } from "../../default-url";
import defaultavatar from "../../images/default-avatar.png";

const Showlessoncomments = (props) => {
  const { comment } = props;
  return (
    <div className={css.box}>
      <div>
        {comment.user.avatar ? (
          <img src={`${AvatarUrl}${comment.user.avatar}`} alt="user" />
        ) : (
          <img src={defaultavatar} alt="default" />
        )}
      </div>
      <div>
        <p>{`"${comment.message}"`}</p>
        <h5>- {comment.name}</h5>
      </div>
    </div>
  );
};

export default Showlessoncomments;
