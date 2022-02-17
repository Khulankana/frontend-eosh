import React, { useState, useEffect } from "react";
import css from "./style.module.css";
import { CircleOutlined, LiveTv, PlayCircleOutline } from "@mui/icons-material";

const ShowLessonCard = (props) => {
  const { lessonsection, current } = props;
  const [checkcurrent, setCheckcurrent] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (lessonsection.id === current) {
      setCheckcurrent(true);
      return;
    }
    setCheckcurrent(false);
  });
  return (
    <div className={`${css.page} ${checkcurrent ? css.current : ""}`}>
      <div className={css.box}>
        {checkcurrent ? <PlayCircleOutline /> : <CircleOutlined />}
      </div>
      <div className={css.box2}>
        <div className={css.space}>
          <LiveTv />
        </div>
        {lessonsection.name}
      </div>
    </div>
  );
};
export default ShowLessonCard;
