import React from "react";
import ReactPlayer from "react-player";
import css from "./style.module.css";
import { FileUrl } from "../../default-url";
import { useNavigate } from "react-router-dom";

const VideoPlayer = (props) => {
  const { section } = props;

  let navigate = useNavigate();

  const Examhandler = () => {
    navigate("/exam", { state: section });
  };

  if (section.section_type === "video") {
    return (
      <div className={css.page}>
        <ReactPlayer
          url={`${FileUrl}${section.file}`}
          controls={true}
          width="80%"
          height="80%"
        />
      </div>
    );
  } else if (section.section_type === "attach") {
    return (
      <div className={css.page1}>
        <iframe
          src={`${FileUrl}${section.file}`}
          title="testPdf"
          height="100%"
          width="100%"
        />
      </div>
    );
  } else if (
    section.section_type === "exam" ||
    section.section_type === "test"
  ) {
    return (
      <div className={css.page}>
        <div className={css.title}>
          Та шалгалтыг 1 удаа л өгөх боломжтойг анхаарна уу
        </div>
        <div className={css.button} onClick={Examhandler}>
          Шалгалт өгөх
        </div>
      </div>
    );
  }
};

export default VideoPlayer;
