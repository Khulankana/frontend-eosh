import React, { useState, useEffect } from "react";
import css from "./style.module.css";
import MiniFooter from "../../components/minifooter";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppHeader from "../../components/header";
import { Form, Input, Button, Typography, Layout } from "antd";

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

const Login = (props) => {
  const [passwordvisible, setPasswordVisible] = useState(true);
  const [passwordstate, setPasswordState] = useState("Show");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stopper, setStopper] = useState(false);

  let navigate = useNavigate();
  let location = useLocation();

  const Passwordhandler = () => {
    if (passwordvisible === true) {
      setPasswordVisible(!passwordvisible);
      setPasswordState("Show");
      return;
    }
    setPasswordVisible(!passwordvisible);
    setPasswordState("Hide");
  };

  const Emailhandler = (event) => {
    setEmail(event.target.value);
  };

  const PasswordSethandler = (event) => {
    setPassword(event.target.value);
  };

  const Signhandler = async (email, pass) => {
    try {
      const response = await axios.post("auth/signin", {
        username: email,
        password: pass,
      });
      props.Savehandler(response.data.auth_token, email);
      navigate("/");
    } catch (error) {
      toast("Амжилтгүй");
      if (!error.response) {
        throw new Error("Unknown error");
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      Signhandler(email, password);
    }
  };

  useEffect(() => {
    if (location.state !== null && stopper === false) {
      toast(location.state + " 😁");
      toast("Та бүртгүүлсэн имэйл нууц үгээрээ нэвтрэнэ үү 😀");
      setStopper(!stopper);
    }
  }, [location.state, stopper]);

  return (
    <Layout>
      {/* Header */}
      <Header style={{ margin: 0, padding: 0, height: "100%" }}>
        <AppHeader />
      </Header>

      {/* Content */}
      <Content>
        <div className={css.page}>
          <div className={css.container}>
            <ToastContainer />
            <Title level={3}>Нэвтрэх</Title>
            {/* <h3>Нэвтрэх</h3> */}
            <div>
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                autoComplete="off"
              >
                <Form.Item name="username">
                  <label>И-мэйл</label>
                  <Input
                    onChange={Emailhandler}
                    onKeyDown={handleKeyDown}
                    type="email"
                  ></Input>
                </Form.Item>

                <Form.Item name="password">
                  <label>Нууц үг</label>
                  <Input.Password
                    onChange={PasswordSethandler}
                    onKeyDown={handleKeyDown}
                    type={passwordvisible ? "password" : "text"}
                  ></Input.Password>
                </Form.Item>

                <Form.Item>
                  <Button type="link" href="/" className={css.forgot}>
                    Нууц үгээ мартсан
                  </Button>
                </Form.Item>

                <Form.Item>
                  <Button
                    onClick={() => Signhandler(email, password)}
                    className={css.button}
                  >
                    Нэвтрэх
                  </Button>
                </Form.Item>

                <Form.Item>
                  <div className={css.bottom}>
                    <p>
                      Аккаунт хэрэгтэй юу?
                      <Button type="link" href="/signup" className={css.signup}>
                        Бүртгүүлэх
                      </Button>
                    </p>
                  </div>
                </Form.Item>
              </Form>

              {/* <div className={css.input}>
              <label>И-мэйл</label>
              <input
                onChange={Emailhandler}
                onKeyDown={handleKeyDown}
                type="email"
              ></input>
            </div> */}
              {/* <div className={css.input}>
              <label>Нууц үг</label>
              <input
                onChange={PasswordSethandler}
                onKeyDown={handleKeyDown}
                type={passwordvisible ? "password" : "text"}
              ></input>
            </div> */}
              {/* <div className={css.remember}>
              <div onClick={Passwordhandler}>
                <input type="checkbox" />
                <label>{passwordstate} password</label>
              </div>
              <div>
                <Link to="/">
                  <div className={css.forgot}>Нууц үгээ мартсан</div>
                </Link>
              </div>
            </div> */}
              {/* </div>
          <div
            onClick={() => Signhandler(email, password)}
            className={css.button}
          >
            <div>Нэвтрэх</div>
          </div> */}
              {/* <div className={css.bottom}>
            <p>Аккаунт хэрэгтэй юу ?</p>

            <div onClick={() => navigate("/signup")} className={css.signup}>
              {" "}
              Бүртгүүлэх
            </div>
          </div> */}
            </div>
          </div>
        </div>
      </Content>

      {/* Footer */}
      <Footer style={{ margin: 0, padding: 0 }}>
        <MiniFooter />
      </Footer>
    </Layout>
  );
};

export default Login;
