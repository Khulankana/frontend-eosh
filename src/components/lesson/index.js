import React, { useEffect, useState } from "react";
import LessonCard from "../lessoncard";
import css from "./style.module.css";
import "./styles.css";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

const Lesson = (props) => {
  const [lessons, setLessons] = useState([]);
  const [current, setCurrent] = useState([]);

  const LoadLesson = () => {
    const { lesson } = props;
    setLessons(lesson);
    setCurrent(lesson);
  };

  useEffect(() => {
    if (current !== props) {
      LoadLesson();
    }
    if (lessons.length > 0) {
      return;
    }
    LoadLesson();
  });

  return (
    <div className={css.page}>
      {/* <Row>
        {lessons.map((lesson, i) => (
          <Col xs={24} xl={8} key={`${i}${lesson.name}`} className={css.bagana}>
            <LessonCard lesson={lesson} />
          </Col>
        ))}
      </Row> */}
      <Carousel breakPoints={breakPoints}>
        {lessons.map((lesson, i) => (
          <div key={`${i}${lesson.name}`} className={css.bagana}>
            <LessonCard lesson={lesson} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Lesson;
