import { Link } from "react-router-dom";
import React, { useState } from "react";
import css from "./style.module.css";
import MiniFooter from "../../components/minifooter";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";
import AppHeader from "../../components/header";
import { Form, Input, Button, Typography, Layout } from "antd";

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

const Signup = () => {
  const [passwordvisible, setPasswordVisible] = useState(true);
  const [passwordstate, setPasswordState] = useState("Show");
  const [passwordwarnig, setPasswordWarning] = useState(false);
  const [namewarnig, setNameWarning] = useState(false);
  const [emailwarnig, setEmailWarning] = useState(false);
  const [terms, setTerms] = useState(false);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const Passwordhandler = () => {
    if (passwordvisible === true) {
      setPasswordVisible(!passwordvisible);
      setPasswordState("Show");
      return;
    }
    setPasswordVisible(!passwordvisible);
    setPasswordState("Hide");
  };

  const Passwordchecker = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length > 5) {
      setPasswordWarning(false);
      return;
    }
    setPasswordWarning(true);
  };

  const Signuphandler = async () => {
    const firstname = name.split(" ")[0];
    const lastname = name.split(" ").reverse()[0];
    if (terms === false) {
      toast("Та манай үйлчилгээний нөхцлийг зөвшөөрсөн байх ёстой");
      return;
    }
    try {
      await axios
        .post("auth/signup", {
          email: mail,
          username: mail,
          password: password,
          name: name,
          firstname: firstname,
          lastname: lastname,
        })
        .then((response) => navigate("/login", { state: response.data }));
    } catch (error) {
      if (!error.response) {
        toast("Алдаа гарлаа Таны имэйл хаяг давхацсан байж магадгүй");
        throw new Error("Unknown error");
      }
    }
  };

  const Emailhander = (event) => {
    setMail(event.target.value);
    if (validator.isEmail(event.target.value)) {
      setEmailWarning(false);
      return;
    }
    setEmailWarning(true);
  };

  const Namehander = (event) => {
    setName(event.target.value);
    if (event.target.value !== "" && event.target.value.split(" ").length > 1) {
      setNameWarning(false);
      return;
    }
    setNameWarning(true);
  };

  const Checkboxhandler = (event) => {
    setTerms(!terms);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      Signuphandler();
    }
  };

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
            <Title level={3} style={{ fontWeight: "600" }}>
              Бүртгүүлэх
            </Title>
            {/* <h3>Бүртгүүлэх</h3> */}
            <div>
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                autoComplete="off"
              >
                <Form.Item name="username">
                  <label>Овог, нэр</label>
                  <Input
                    type="name"
                    onChange={Namehander}
                    onKeyDown={handleKeyDown}
                  ></Input>
                  {namewarnig ? (
                    <div className={css.warning}>Овог нэрээ бичнэ үү</div>
                  ) : (
                    ""
                  )}
                </Form.Item>

                <Form.Item name="email">
                  <label>И-мэйл</label>
                  <Input
                    type="email"
                    onChange={Emailhander}
                    onKeyDown={handleKeyDown}
                    required={true}
                  ></Input>
                  {emailwarnig ? (
                    <div className={css.warning}>И-мэйлээ зөв бичнэ үү</div>
                  ) : (
                    ""
                  )}
                </Form.Item>

                <Form.Item name="password">
                  <label>Нууц үг</label>
                  <Input.Password
                    onChange={Passwordchecker}
                    onKeyDown={handleKeyDown}
                    type={passwordvisible ? "password" : "text"}
                  ></Input.Password>
                  {passwordwarnig ? (
                    <div className={css.warning}>
                      Нууц үг хэт богино байна (доод тал нь 6 тэмдэгт)
                    </div>
                  ) : (
                    ""
                  )}
                </Form.Item>
                <Form.Item>
                  <div className={css.remember}>
                    <div>
                      <input type="checkbox" onChange={Checkboxhandler} />
                      <label>
                        Бүртгүүлснээр би сургалтын платформын eosh-academy видео
                        онлайн хичээл, сургалтын
                        <Link to="/">
                          <div className={css.signup}>
                            Хэрэглэх нөхцөл болон Нууцлалын бодлого
                          </div>
                        </Link>
                        -г зөвшөөрч байна.
                      </label>
                    </div>
                  </div>
                </Form.Item>

                <Form.Item>
                  <Button className={css.button} onClick={Signuphandler}>
                    Бүртгүүлэх
                  </Button>
                </Form.Item>

                <Form.Item>
                  <div className={css.bottom}>
                    <p>
                      Та бүртгэлтэй юу?
                      <Button type="link" href="/login" className={css.signup}>
                        Нэвтрэх
                      </Button>
                    </p>
                  </div>
                </Form.Item>
              </Form>

              {/* <div className={css.input}>
              <label>Бүтэн нэр</label>
              <input
                type="name"
                onChange={Namehander}
                onKeyDown={handleKeyDown}
              ></input>
              {namewarnig ? (
                <div className={css.warning}>Овог нэрээ бичнэ үү</div>
              ) : (
                ""
              )}
            </div> */}
              {/* <div className={css.input}>
              <label>И-мэйл</label>
              <input
                type="email"
                onChange={Emailhander}
                onKeyDown={handleKeyDown}
                required={true}
              ></input>
              {emailwarnig ? (
                <div className={css.warning}>И-мэйлээ зөв бичнэ үү</div>
              ) : (
                ""
              )}
            </div> */}
              {/* <div className={css.input}>
              <label>Нууц үг</label>
              <input
                onChange={Passwordchecker}
                onKeyDown={handleKeyDown}
                type={passwordvisible ? "password" : "text"}
              ></input>
              {passwordwarnig ? (
                <div className={css.warning}>
                  Нууц үг хэт богино байна (доод тал нь 6 тэмдэгт)
                </div>
              ) : (
                ""
              )}
            </div> */}
              {/* <div className={css.remember}>
              <div onClick={Passwordhandler}>
                <input type="checkbox" />
                <label>{passwordstate} password</label>
              </div>
            </div> */}
              {/* <div className={css.remember}>
              <div>
                <input type="checkbox" onChange={Checkboxhandler} />
                <label>
                  Бүртгүүлснээр би сургалтын платформын eosh-academy видео
                  онлайн хичээл, сургалтын
                  <Link to="/">
                    <div className={css.signup}>
                      Хэрэглэх нөхцөл болон Нууцлалын бодлого
                    </div>
                  </Link>
                  -г зөвшөөрч байна.
                </label>
              </div>
            </div> */}
              {/* </div>
          <button className={css.button} onClick={Signuphandler}>
            <div>Бүртгүүлэх</div>
          </button> */}
              {/* <div className={css.bottom}>
            <p>Та бүртгэлтэй юу ?</p>
            <Link to="login">
              <div className={css.signup}> Нэвтрэх</div>
            </Link>
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

export default Signup;
