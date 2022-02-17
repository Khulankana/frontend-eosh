import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import SuggestLessonCard from "../suggestlessoncard";
import css from "./style.module.css";
import "./style.css";
import { Typography, Button } from "antd";
import Carousel from "react-elastic-carousel";

const { Title } = Typography;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

const SuggestLesson = () => {
  const [suggestedlesson, setSuggestedLesson] = useState([]);

  const fetchLessons = () => {
    axios.get("/nlog/suggest_lessons").then((response) => {
      console.log(response.data);
      setSuggestedLesson(response.data);
    });
  };

  useEffect(() => {
    if (suggestedlesson.length > 0) {
      return;
    }
    fetchLessons();
  });

  return (
    <div className={`page `}>
      <div className={css.suggest}>
        <Title
          level={1}
          style={{
            color: "#36414d",
            fontSize: "x-large",
            margin: "2rem 0",
          }}
        >
          Санал болгож буй сургалтууд
        </Title>
        {/* <h1 className={css.title}>Санал болгож буй сургалтууд</h1> */}
        {/* <div className={css.bottomLine}></div> */}
        {/* <Row>
          {suggestedlesson.map((object, i) => (
            <Col xs={24} xl={8}>
              <div className={css.card} key={object.name}>
                {/* <Tooltip title="prompt text">
                  <Button> */}
        {/* <SuggestLessonCard lesson={object} />
                {/* </Button>
                </Tooltip> */}
        {/* </div>
            </Col>
          ))}
        </Row> */}

        <Carousel breakPoints={breakPoints}>
          {suggestedlesson.map((lesson, i) => (
            <div key={`${i}${lesson.name}`} className={css.bagana}>
              <SuggestLessonCard lesson={lesson} />
            </div>
          ))}
        </Carousel>

        {/* <div className={css.cards}>
          {suggestedlesson.map((object, i) => (
            <div className={css.card} key={object.name}>
              <div>
                <SuggestLessonCard lesson={object} />
              </div>
            </div>
          ))}
        </div> */}
        <Button type="link" href="/lessons" className={css.btn}>
          Бүх сургалтыг харах
        </Button>
        {/* <Link to="/lessons">
          <div className={css.btn}>Бүх сургалтыг харах</div>
        </Link> */}
      </div>
    </div>
  );
};

export default SuggestLesson;
