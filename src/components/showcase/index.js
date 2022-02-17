import React from "react";
import { Button, Carousel, Row, Col } from "antd";
import ReactPlayer from "react-player";
import css from "./style.module.css";
import showcaseImg1 from "../../images/showcase1.jpg";
import showcaseImg2 from "../../images/showcase2.jpg";
import showcaseImg3 from "../../images/showcase3.jpg";

const items = [
  {
    key: "1",
    title: " МЭДЭЭЛЭЛ ТЕХНОЛОГИЙН",
    content:
      "АНХАН ШАТНЫ МЭДЛЭГГҮЙЧ ТА ПРОГРАММЫН ХЭЛИЙГ СУРАЛЦАХ БҮРЭН БОЛОМЖТОЙ.",
    uri: showcaseImg1,
    videoUrl: "https://www.youtube.com/watch?v=3-2Pj5hxwrw",
  },
  {
    key: "2",
    title: " МЭДЭЭЛЭЛ ТЕХНОЛОГИЙН",
    content:
      "АНХАН ШАТНЫ МЭДЛЭГГҮЙЧ ТА ПРОГРАММЫН ХЭЛИЙГ СУРАЛЦАХ БҮРЭН БОЛОМЖТОЙ.",
    uri: showcaseImg2,
    videoUrl: "",
  },
  {
    key: "3",
    title: " МЭДЭЭЛЭЛ ТЕХНОЛОГИЙН",
    content:
      "АНХАН ШАТНЫ МЭДЛЭГГҮЙЧ ТА ПРОГРАММЫН ХЭЛИЙГ СУРАЛЦАХ БҮРЭН БОЛОМЖТОЙ.",
    uri: showcaseImg3,
    videoUrl: "",
  },
];

function AppShowcase() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel autoplay>
        {items.map((item) => {
          return (
            // <ReactPlayer style={{ width: "50%" }} url={item.videoUrl} />
            <div key={item.key} className={css.showcase}>
              <img src={item.uri} alt="" style={{ maxWidth: "100%" }} />

              <div className={css.content}>
                <Row>
                  <Col span={12}>
                    <ReactPlayer style={{ width: "50%" }} url={item.videoUrl} />
                  </Col>
                  <Col span={12}>
                    {" "}
                    <h3> {item.title}</h3>
                    <h1> ЦАХИМ СУРГАЛТ </h1>
                    <p>{item.content}</p>
                    <div className={css.buttongroup}>
                      <Button
                        type="link"
                        href="/signup"
                        href="/signup"
                        className={`${css.button} ${css.signup}`}
                      >
                        Бүртгүүлэх
                      </Button>
                      <Button
                        type="link"
                        href="/"
                        className={`${css.button} ${css.teacher}`}
                      >
                        Хэрхэн багш болох вэ?
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppShowcase;
