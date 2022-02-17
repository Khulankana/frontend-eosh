import React, { useState, useEffect } from "react";
import VideoPlayer from "../../components/videoplayer";
import css from "./style.module.css";
import {
  KeyboardArrowRight,
  KeyboardArrowLeft,
  HomeSharp,
  Settings,
  List,
} from "@mui/icons-material";
import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ShowLessonCard from "../../components/showlessoncard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Showlessoncomments from "../../components/showlessoncomment";

const ShowLesson = (props) => {
  const [lessonsections, setLessonsections] = useState([]);
  const [comments, setComments] = useState([]);
  const [current, setCurrent] = useState();
  const [stopper, setStopper] = useState(false);
  const [checkstopper, setCheckStopper] = useState(false);
  const [list, setList] = useState(false);
  const [logged, setLogged] = useState(false);
  const [prevdisable, setPrevdisable] = useState(true);
  const [nextdisable, setNextdisable] = useState(false);
  const [comment, setComment] = useState("");

  const token = localStorage.getItem("token");

  let location = useLocation();
  let lesson = location.state;

  let navigate = useNavigate();

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const fetchLessonSection = async () => {
    try {
      await axios.get(`/lessons/${lesson.id}/show`, config).then((response) => {
        setLessonsections(response.data);
        const current = response.data[0];
        setCurrent(current.id);
      });
    } catch {
      toast("Алдаа гарлаа");
    }
  };

  const fetchComments = async () => {
    try {
      await axios
        .get(`/lessons/${lesson.id}/comments`, config)
        .then((response) => {
          setComments(response.data);
        });
    } catch {
      toast("Та эхлээд нэвтэрнэ үү !");
    }
  };

  const Clickhandler = (id) => {
    setCurrent(id);
    setList(false);
  };

  const fetchLogged = async () => {
    if (checkstopper) {
      return;
    }
    setCheckStopper(!checkstopper);
    try {
      await axios
        .get(
          `/lessons/${localStorage.getItem("email")}/${lesson.id}/check`,
          config
        )
        .then((response) => {
          if (response.data === "ok") {
            setLogged(true);
          } else {
            navigate("/payment", { state: response.data });
          }
        })
        .catch(function (error) {
          if (error.response.data.message === "Unauthenticated.") {
            localStorage.removeItem("logged", false);
            navigate("/login", { state: "Та нэвтрэнэ үү" });
          }
        });
    } catch {
      toast("Алдаа гарлаа");
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchLogged();
    if (logged === false || lessonsections.length > 0 || stopper === true) {
      return;
    }
    setStopper(!stopper);
    fetchLessonSection();
    fetchComments();
  });

  const Prevhandler = () => {
    var index = lessonsections.findIndex((obj) => obj.id === current);
    if (index === 0) {
      return;
    }
    setCurrent(lessonsections[index - 1].id);
    setNextdisable(false);
    if (index === 1) {
      setPrevdisable(true);
    }
  };

  const Nexthandler = () => {
    var index = lessonsections.findIndex((obj) => obj.id === current);
    if (index === lessonsections.length - 1) {
      return;
    }
    setCurrent(lessonsections[index + 1].id);
    setPrevdisable(false);
    if (index === lessonsections.length - 2) {
      setNextdisable(true);
    }
  };

  const Listhandler = () => {
    setList(!list);
  };

  const Inputhandler = (event) => {
    setComment(event.target.value);
  };

  const Commenthandler = async () => {
    if (comment === "") {
      toast("Сэтгэгдэл бичих хэсэг хоосон байна.");
      return;
    }
    try {
      await axios
        .get(`/nlog/show_name?search=${localStorage.getItem("email")}`, config)
        .then((response) => {
          const id = response.data[1].id;
          const name = response.data[0][0].name;
          try {
            axios
              .post(
                `/comments`,
                {
                  name: name,
                  message: comment,
                  lesson_section_id: current,
                  user_id: id,
                },
                config
              )
              .then(toast("Амжилттай"));
          } catch {
            toast("Алдаа гарлаа");
          }
        });
    } catch {
      toast("Алдаа гарлаа");
    }
  };

  return (
    <div className={css.page}>
      <ToastContainer />
      <div className={css.container}>
        <div>
          <div className={`${css.header} ${css.borderright}`}>
            <Link to="/">
              <div className={css.imagecontain}>
                <HomeSharp style={{ fill: "white" }} />
              </div>
            </Link>
            <div className={css.imagecontain}>
              <Settings style={{ fill: "white" }} />
            </div>
            <div
              onClick={Listhandler}
              className={`${css.imagecontain} ${css.mobile}`}
            >
              <List style={{ fill: "white" }} />
            </div>
            <div
              onClick={Prevhandler}
              className={`${css.imagecontain} ${css.button} ${css.mobile} ${
                prevdisable ? css.none : ""
              }`}
            >
              <KeyboardArrowLeft style={{ fill: "white" }} />
            </div>
            <div
              onClick={Nexthandler}
              className={`${css.imagecontain} ${css.button} ${css.mobile} ${
                css.rightbutton
              } ${nextdisable ? css.none : ""}`}
            >
              <KeyboardArrowRight style={{ fill: "white" }} />
            </div>
          </div>
          <div>
            <div className={`${css.leftside} ${list ? css.listtitle : ""}`}>
              <div className={css.title2}>{lesson.name}</div>
              <div className={css.intro}>Танилцуулга</div>
              {lessonsections.map((el, i) => (
                <div
                  key={el.name}
                  onClick={() => Clickhandler(el.id)}
                  className={css.box}
                >
                  <ShowLessonCard lessonsection={el} current={current} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* right side */}
        <div>
          <div className={`${css.header} ${css.header2}`}>
            <div></div>
            <div className={css.buttoncontain}>
              <div
                className={`${css.button} ${css.leftbutton} ${
                  prevdisable ? css.none : ""
                }`}
                onClick={Prevhandler}
              >
                <KeyboardArrowLeft style={{ fill: "white" }} />
                <h3 className={css.title}>Өмнөх</h3>
              </div>
              <div
                className={`${css.button} ${css.rightbutton} ${
                  nextdisable ? css.none : ""
                }`}
                onClick={Nexthandler}
              >
                <h3 className={css.title}>Дараагийн</h3>
                <KeyboardArrowRight style={{ fill: "white" }} />
              </div>
            </div>
          </div>
          {
            // eslint-disable-next-line array-callback-return
            lessonsections.map((el, id) => {
              if (el.id === current) {
                return <VideoPlayer section={el} key={id} />;
              }
            })
          }
          <div className={css.writecomment}>
            <input
              onChange={Inputhandler}
              type="text"
              placeholder="Сэтгэгдлээ бичнэ үү"
            />
            <button onClick={Commenthandler}>Илгээх</button>
          </div>
          {
            <div className={css.items}>
              <h5 className={css.number}>{comments.length} СЭТГЭГДЭЛ</h5>
              {comments.map((val, i) => (
                <Showlessoncomments
                  comment={val}
                  key={`${val.name}${val.id}`}
                />
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ShowLesson;
