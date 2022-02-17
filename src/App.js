import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Direction from "./pages/direction";
import Lessons from "./pages/lessons";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Teacher from "./pages/teacher";
import ShowLesson from "./pages/showlesson";
import Exam from "./pages/exam";
import UserScore from "./pages/userscore";
import Zannen from "./pages/zannen";
import Payment from "./pages/payment";

import axios from "axios";
import https from "https";

axios.defaults.baseURL = "https://admin.eoshacademy.com/api/v1/";
axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const App = (props) => {
  const Savehandler = (tkn, email) => {
    localStorage.setItem("token", tkn);
    localStorage.setItem("email", email);
    localStorage.setItem("logged", true);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/lessons" exact element={<Lessons />}></Route>
          <Route
            path="/login"
            exact
            element={<Login Savehandler={Savehandler} />}
          ></Route>
          <Route path="/signup" exact element={<Signup />}></Route>
          <Route path="/teacher" exact element={<Teacher />}></Route>
          <Route path="/direction" exact element={<Direction />}></Route>
          <Route
            path="/lessons/showlesson"
            exact
            element={<ShowLesson />}
          ></Route>
          <Route path="/exam" element={<Exam />}></Route>
          <Route path="/userscore" element={<UserScore />}></Route>
          <Route path="/zannen" element={<Zannen />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
