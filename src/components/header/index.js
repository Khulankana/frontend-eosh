import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo";

const Header = () => {
  const [check, setCheck] = useState(false);

  var logged = localStorage.getItem("logged") ? true : false;
  const Clickhandler = () => {
    check ? setCheck(false) : setCheck(true);
  };

  const Signouthandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("logged");
    localStorage.removeItem("email");
    window.location.reload(false);
  };
  return (
    <div className="wrapper">
      {/* header\ */}
      {check ? (
        <div className="menu" onClick={Clickhandler}>
          <ul>
            <li>
              <Link to="/">Нүүр хуудас</Link>
            </li>
            <li>
              <Link to="/direction">Бүргүүлэх заавар</Link>
            </li>
            <li>
              <Link to="/lessons">Хичээлүүд</Link>
            </li>
            {logged ? (
              <div>
                <li>
                  <Link to="/payment">Хичээл Худалдаж авах</Link>
                </li>
                <li onClick={Signouthandler}>
                  <Link to="/">Гарах</Link>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Link to="/login">Нэвтрэх</Link>
                </li>
                <li>
                  <Link to="/signup"> Бүртгүүлэх</Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      ) : (
        ""
      )}
      <div className="navbar">
        <div className="container-navbar">
          <Logo />
          <div className="list">
            <div className="line" onClick={Clickhandler}>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <ul className="ul">
              <li>
                <Link to="/">Нүүр хуудас</Link>
              </li>
              <li>
                <Link to="/direction">Хичээлд бүргүүлэх заавар</Link>
              </li>
              <li>
                <Link to="/lessons">Хичээлүүд</Link>
              </li>
              <li>|</li>
              {logged ? (
                <li>
                  <Link to="/payment">Хичээл худалдаж авах</Link>
                </li>
              ) : (
                ""
              )}
              {logged ? (
                <li onClick={Signouthandler}>
                  <Link to="/">Гарах</Link>
                </li>
              ) : (
                <li>
                  <Link to="/login">Нэвтрэх</Link>
                </li>
              )}
              {logged ? (
                ""
              ) : (
                <li>
                  <Link to="/signup">
                    <div className="button"> Бүртгүүлэх </div>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// import React, { useState } from "react";
// import Logo from "../logo";
// import css from "./style.module.css";
// import { Anchor, Drawer, Button } from "antd";

// const { Link } = Anchor;

// function AppHeader() {
//   const [visible, setVisible] = useState(false);
//   const [check, setCheck] = useState(false);

//   var logged = localStorage.getItem("logged") ? true : false;
//   const Clickhandler = () => {
//     check ? setCheck(false) : setCheck(true);
//   };

//   const Signouthandler = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("logged");
//     localStorage.removeItem("email");
//     window.location.reload(false);
//   };

//   const showDrawer = () => {
//     setVisible(true);
//   };

//   const onClose = () => {
//     setVisible(false);
//   };

//   return (
//     <div className="container-fluid">
//       <div>
//         <div className="header">
//           <div className="logo">
//             <Logo />
//           </div>
//           <div className="mobileHidden" style={{ marginRight: "0" }}>
//             <Anchor targetOffset="65">
//               <Link href="/" title="Нүүр хуудас" />
//               <Link href="/direction" title="Бүргүүлэх заавар" />
//               <Link href="/lessons" title="Хичээлүүд" />
//               <span style={{ color: "white", fontSize: "bolder" }}>|</span>
//               <Link href="/login" title="Нэвтрэх" />
//               <Link className={css.btn} href="/signup">
//                 Бүртгүүлэх
//               </Link>
//             </Anchor>
//           </div>
//           <div className="mobileVisible">
//             <Button type="primary" onClick={showDrawer}>
//               <i className="fas fa-bars"></i>
//             </Button>
//             <Drawer
//               placement="right"
//               closable={false}
//               onClose={onClose}
//               visible={visible}
//             >
//               <Anchor targetOffset="65">
//                 <Link href="/" title="Нүүр хуудас" />
//                 <Link href="/direction" title="Бүргүүлэх заавар" />
//                 <Link href="/lessons" title="Хичээлүүд" />
//                 <Link href="/login" title="Нэвтрэх" />
//                 <Link className={css.btn} href="/signup" title="Бүртгүүлэх" />
//               </Anchor>
//             </Drawer>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AppHeader;
