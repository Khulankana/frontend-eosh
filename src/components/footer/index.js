import React from "react";
// import { Link } from "react-router-dom";
import css from "./style.module.css";
import { Typography, Button, Row, Col } from "antd";

const { Text } = Typography;

const Footer = () => {
  let copy = "\u00A9";

  return (
    <Row className={css.box}>
      <Col span={10}>
        <Text className={css.light} style={{ fontSize: "1.2rem" }}>
          {copy} eosh-academy видео онлайн хичээл, сургалт 2021-2022
        </Text>
        <Button type="link" href="/" className={css.btn}>
          Түгээмэл асуулт хариултууд
        </Button>
        <Button type="link" href="/" className={css.btn}>
          Хэрхэн хичээлдээ бүртгүүлэх вэ?
        </Button>
        <Button type="link" href="/" className={css.btn}>
          Хичээлээ хэрхэн үзэх вэ?
        </Button>
        <Button type="link" href="/" className={css.btn}>
          Санал хүсэлт
        </Button>

        <Text className={css.light}>------------</Text>
        <Text className={css.light} style={{ fontSize: "1.2rem" }}>
          Холбоо барих
        </Text>
        <Text className={css.light}>Утас: 976-8856****</Text>

        <Text className={css.light}>И-мэйл: eosh@mail.mn</Text>

        <Text className={css.light}>
          Ажлын цаг : Даваа-Баасан гарагт 9:00-18:00, цайны цаг 12:00-13:00
        </Text>
      </Col>

      <Col span={6}></Col>

      <Col span={8}>
        <Button type="link" href="/" className={css.btn}>
          Хэрэглэх нөхцөл
        </Button>
        <Button type="link" href="/" className={css.btn}>
          Нууцлалын бодлого
        </Button>
        <Text className={css.light}>*</Text>
        <Text className={css.light}>by: @fkvivid</Text>
      </Col>

      {/* <div>
        <h4>{copy} eosh-academy видео онлайн хичээл, сургалт 2021-2022</h4>
        <p>
          <Link to="/">
            <div className={css.light}>Түгээмэл асуулт хариултууд</div>
          </Link>
        </p>
        <p>
          <Link to="/">
            <div className={css.light}>Хэрхэн хичээлдээ бүртгүүлэх вэ?</div>
          </Link>
        </p>
        <p>
          <Link to="/">
            <div className={css.light}>Хичээлээ хэрхэн үзэх вэ?</div>
          </Link>
        </p>
        <p>
          <Link to="/">
            <div className={css.light}>Санал Хүсэлт</div>
          </Link>
        </p>

        <p>-------</p>

        <h4>Холбоо барих</h4>
        <p>Утас: 976-8856****</p>
        <p>И-мэйл: eosh@mail.mn</p>
        <p>Ажлын цаг : Даваа-Баасан гарагт 9:00-18:00, цайны цаг 12:00-13:00</p>
      </div> */}
      {/* <div>
        <p>
          <Link to="/">
            <div className={css.light}>Хэрэглэх нөхцөл</div>
          </Link>
        </p>
        <p>
          <Link to="/">
            <div className={css.light}>Нууцлалын бодлого</div>
          </Link>
        </p>
        <p>*</p>

        <h4>by: @fkvivid</h4>
      </div> */}
    </Row>
  );
};

export default Footer;
