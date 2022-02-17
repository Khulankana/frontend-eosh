import React, { useState, useEffect } from "react";
import axios from "axios";
import Lesson from "../../components/lesson";
import css from "./style.module.css";
// import image from "../../images/searchicon.svg";
import AppFooter from "../../components/footer";
import AppHeader from "../../components/header";
import { Typography, Input, Menu, Dropdown, Layout } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Search } = Input;
const { Header, Content, Footer } = Layout;

const Lessons = () => {
  const [lessons, setLessons] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [firstvalue, setFirstValue] = useState("Бүгд");
  const [hidecategory, setHideCategory] = useState(true);

  const fetchLesson = () => {
    axios.get("/nlog/lessons").then((response) => {
      console.log(response);
      setLessons(response.data);
      setFiltered(response.data);
    });
    axios.get("/nlog/categories").then((response) => {
      setCategories(response.data);
    });
  };

  useEffect(() => {
    if (lessons.length > 0) {
      return;
    }
    fetchLesson();
  });

  const onSearch = (event) => {
    filterlesson(event.target.value);
  };

  const filterlesson = (searchvalue) => {
    let lesson = lessons;
    const filter = lesson.filter((el) =>
      el.name.toLowerCase().includes(searchvalue)
    );
    setFiltered(filter);
  };

  const CategoryHandler = (id, name) => {
    if (id === "all") {
      setFirstValue("Бүгд");
      let lesson = lessons;
      setFiltered(lesson);
      return;
    }
    let lesson = lessons;
    const filter = lesson.filter((el) => {
      return el.category_id === id;
    });
    setFiltered(filter);
    setFirstValue(name);
  };

  const Visiblehandler = () => {
    if (hidecategory === true) {
      setHideCategory(false);
      return;
    }
    setHideCategory(true);
  };

  const Showhandler = () => {
    if (hidecategory === true) {
      return;
    }
    setHideCategory(true);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <ul className={`${css.list}`}>
          <li>
            <div onClick={() => CategoryHandler("all")}>Бүгд</div>
          </li>
          {categories.map((el, id) => (
            <li key={`${el.name}${el.id}`}>
              <div
                onClick={() => CategoryHandler(el.id, el.name)}
              >{`${el.name} (${el.lessons_count})`}</div>
            </li>
          ))}
        </ul>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className={css.page} onClick={Showhandler}>
      {/* Header */}
      <Header style={{ margin: 0, padding: 0, height: "100%" }}>
        <AppHeader />
      </Header>

      {/* Content */}

      <Content className={css.container}>
        <div>
          {/* header */}
          <div className={css.header}>
            <div>
              <div className={css.category}>
                <Title level={5}>Ангилал: {"\u00a0\u00a0"} </Title>
                <Dropdown overlay={menu}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      color: "rgb(44, 187, 183)",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Бүгд <DownOutlined />
                  </a>
                </Dropdown>
                {/* <h5>Ангилал: {"\u00a0\u00a0"}</h5> */}
                {/* <div>
                <div className={css.all} onClick={Visiblehandler}>
                  <h5>
                    {firstvalue} {"\u00a0"}
                  </h5>
                  <div className={css.dropdown}></div>
                </div>
                <div>
                  <ul className={`${css.list} ${hidecategory ? css.hide : ""}`}>
                    <li>
                      <div onClick={() => CategoryHandler("all")}>Бүгд</div>
                    </li>
                    {categories.map((el, id) => (
                      <li key={`${el.name}${el.id}`}>
                        <div
                          onClick={() => CategoryHandler(el.id, el.name)}
                        >{`${el.name} (${el.lessons_count})`}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}
              </div>
            </div>
            <div>
              <Search
                placeholder="Хайх"
                // onSearch={onSearch}
                style={{
                  padding: "1rem",
                }}
                size="large"
                onChange={onSearch}
              />
              {/* <input
              className={css.search}
              type="search"
              placeholder="Хайх"
              onChange={onSearch}
            ></input>
            <div className={css.searchicon}>
              <img src={image} alt="search"></img>
            </div> */}
            </div>
          </div>
          {/* body */}
          <Lesson lesson={filtered} />
        </div>
      </Content>

      {/* Footer */}
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
};

export default Lessons;
