import React from "react";
// import { Link } from "react-router-dom";
import SuggestLesson from "../../components/suggestlesson/suggestlesson";
import Comment from "../../components/comment";
import css from "./style.module.css";
import AppFooter from "../../components/footer";
import AppHeader from "../../components/header";
import AppShowcase from "../../components/showcase";

import { Typography, Layout } from "antd";

const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout>
      <Header style={{ margin: 0, padding: 0, height: "100%" }}>
        <AppHeader />
      </Header>
      {/* <div className="space"></div> */}
      <Content>
        <AppShowcase />
        {/* <div className={css.showcase}>
          <div className={css.space}></div>
          <div className={css.showcasecontent}>
            <div>
              <Title
                level={3}
                style={{
                  color: "white",
                  fontSize: "2.5rem",
                  margin: 0,
                  fontWeight: "700",
                }}
              >
                МЭДЭЭЛЭЛ ТЕХНОЛОГИЙН
              </Title>
              {/* <h3>МЭДЭЭЛЭЛ ТЕХНОЛОГИЙН</h3> */}
        {/* <Title
                level={1}
                style={{
                  color: "white",
                  fontSize: "5rem",
                  margin: " 0.5rem 0",
                  fontWeight: "700",
                }}
              >
                ЦАХИМ СУРГАЛТ
              </Title> */}
        {/* <h1>ЦАХИМ СУРГАЛТ</h1> 
            style={{ color: "white", fontSize: "1.5rem", margin: "0" }}*/}
        {/* <div className={css.buttongroup}> */}
        {/* <Link to="/signup">
                <div className={`${css.button} ${css.signup}`}>Бүртгүүлэх</div>
              </Link>

              <Link to="/">
                <div className={`${css.button} ${css.teacher}`}>
                  Хэрхэн багш болох вэ?
                </div>
              </Link> */}
        {/* </div> */}
        {/* </div>
          </div>
        </div> */}{" "}
        {/* */}
        <br />
        <SuggestLesson />
        <Comment />
      </Content>
      <Footer style={{ margin: "0", padding: 0 }}>
        <AppFooter />
      </Footer>
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
