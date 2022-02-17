import React from "react";
import css from "./style.module.css";
import image from "../../images/android-chrome-512x512.png";
import { FileUrl } from "../../default-url";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Rate } from "antd";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 250,
    fontSize: theme.typography.pxToRem(12),
    border: "2px solid darkgray",
  },
}));

const SuggestLessonCard = (props) => {
  const { lesson } = props;

  let navigate = useNavigate();

  const Passhandler = () => {
    navigate("/lessons/showlesson", { state: lesson });
  };

  return (
    <div onClick={Passhandler}>
      <div className={css.box}>
        <HtmlTooltip
          title={
            <React.Fragment>
              <div className={css.toolTip}>
                <h3 style={{ fontWeight: "800" }}>{lesson.name}</h3>
                <div className={css.yellow}>Борлуулалт өндөр</div>
                <div>
                  <ul>
                    <li>{lesson.description}</li>
                    <li>{lesson.category ? lesson.category.name : " "}</li>
                  </ul>
                </div>
                <div
                  style={{
                    margin: "1rem",
                    marginTop: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  <span className={css.sold}>Сагсанд хийх </span>
                  {/* <span  style={{ marginLeft: "2rem  " }}>
                {/* <HeartTwoTone style={{ color: "#eb2f96", fontSize: 100 }} /> */}
                  {/* </span> */}
                </div>
              </div>
            </React.Fragment>
          }
          arrow
          placement="right-start"
        >
          <Button
            variant="text"
            style={{
              backgroundColor: "#fff",
              color: "#000",
              margin: 0,
              padding: 0,
              fontWeight: 600,
            }}
          >
            <div className={css.boximage}>
              {lesson.image ? (
                <img
                  src={`${FileUrl}${lesson.image}`}
                  alt="box"
                  data-tip
                  data-for="registerTip"
                />
              ) : (
                <img src={image} alt="box" />
              )}
            </div>
          </Button>
        </HtmlTooltip>
        <div className={css.boxtext}>
          <h3> {lesson.name} </h3>
          {/* <h5>{lesson.description}</h5> */}
          <p>
            <b>49,900₮</b>{" "}
            <span
              style={{
                textDecoration: "line-through",
                padding: "0.5rem",
                fontSize: "14px",
              }}
            >
              199,000₮
            </span>
          </p>

          {lesson.category ? (
            <p className={css.angilal}>{lesson.category.name}</p>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* <ReactTooltip
          id="registerTip"
          place="right"
          effect="solid"
          type="light"
          border="true"
          borderColor="#2dbbb7"
        >
          <div className={css.toolTip}>
            <h3 style={{ fontWeight: "800" }}>{lesson.name}</h3>
            <div className={css.yellow}>Борлуулалт өндөр</div>
            <div>
              <ul>
                <li>{lesson.description}</li>
                <li>{lesson.category ? lesson.category.name : " "}</li>
              </ul>
            </div>
            <div
              style={{
                margin: "1rem",
                marginTop: "1.5rem",
                textAlign: "center",
              }}
            >
              <span className={css.sold}>Худалдаж авах </span>
            </div>
          </div>
        </ReactTooltip> */}
    </div>
  );
};

export default SuggestLessonCard;
