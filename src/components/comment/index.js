import React, { useState, useEffect } from "react";
import CommentCard from "../commentcard";
import css from "./style.module.css";
import axios from "axios";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [stopper, setStopper] = useState(false);

  const fetchComment = () => {
    setStopper(true);
    axios.get("/nlog/comments").then((response) => {
      setComments(response.data);
    });
  };

  useEffect(() => {
    if (stopper === true || comments.length > 0) {
      return;
    }
    fetchComment();
  });
  //   console.log(comments);
  return (
    <div>
      <div className={css.header}>Манай сурагчдын сэтгэгдлүүд</div>
      <div className={css.body}>
        {comments.length > 0 ? (
          <div className={css.items}>
            {comments.map((val, i) => (
              <CommentCard comment={val} key={`${val.name}${val.id}`} />
            ))}
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default Comment;
