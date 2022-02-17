import React from "react";
import AppHeader from "../../components/header";
import AppFooter from "../../components/footer";
import css from "./style.module.css";
import { Layout, Divider } from "antd";

const { Header, Content, Footer } = Layout;

const Direction = () => {
  return (
    <Layout>
      {/* Header */}
      <Header style={{ margin: 0, padding: 0, height: "100%" }}>
        <AppHeader />
      </Header>

      {/* Content */}

      <Content>
        <div className={css.direction}>Заавар оруулна</div>
      </Content>

      {/* Footer */}
      <Footer style={{ margin: 0, padding: 0 }}>
        <AppFooter />
      </Footer>
    </Layout>
  );
};

export default Direction;
