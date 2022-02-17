import React from "react";
import css from "./style.module.css";
import { Typography } from "antd";

const { Title } = Typography;

const MiniFooter = () => {
  let copy = "\u00A9";
  return (
    <div className={css.box}>
      <div>
        <Title level={5} style={{ color: "#bac1c7" }}>
          {copy} eosh-academy видео онлайн хичээл, сургалт 2021-2022
        </Title>
        {/* <h4>{copy} eosh-academy видео онлайн хичээл, сургалт 2021-2022</h4> */}
      </div>
    </div>
  );
};
export default MiniFooter;
