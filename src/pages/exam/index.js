import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import css from "./style.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Exam = (props) => {
  const [exams, setExams] = useState([]);
  const [stopper, setStopper] = useState(false);
  let check;

  let location = useLocation();
  let navigate = useNavigate();

  const lesson_section = location.state;

  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  

  const fetchExams = async () => {
    try {
      await axios
        .get(`/exams/${lesson_section.file}`, config)
        .then((response) => {
          check=response.data[0].id;
          const exams = Object.keys(response.data).map((key) => {
            return response.data[key];
          });
          setExams(exams);
          setStopper(!stopper);
        });
        BeforeExamhandler();
    } catch {
      toast("Алдаа гарлаа");
    }
  };
  const BeforeExamhandler = async( ) => {
    try{
      await axios
      .get(`/exams/before_exam/${localStorage.getItem('email')}/${check}`,config).then(
        response =>{
          if(response.data === 'cancel'){
              navigate('/zannen');
          }
        }
      )
    }
    catch{
    }
  }
  const Clickhandler = async() => {
    let fail = false;
    // eslint-disable-next-line array-callback-return
    exams.map(val =>{
      var counter = 0;
      var counter2 = 0;
        // eslint-disable-next-line array-callback-return
        val.answer.map(val2 =>{
          counter2++;
          if(val2.checked === undefined){
            counter++;
          }
        })
        if(counter === counter2){
          fail =true;
        }
    })
    if(fail===true){
      toast('Та бүх асуултандаа хариулна уу')
      return;
    }
    const exam1 = [...exams];
    exam1[0].email = localStorage.getItem('email');
    setExams(exam1);
    try {
      await axios({
        method: 'post',
        url: 'exams/check',
        data: exams,
        headers: { Authorization: `Bearer ${token}` },
      }).then( response =>
        navigate('/userscore',{state: response.data})
      );
    }
    catch {
      toast('Алдаа гарлаа')
    }
  }
  useEffect(() => {
    if (stopper === true) {
      return;
    }
    fetchExams();
  });

  return (
    <div className={css.page}>
      <ToastContainer />
      <div className={css.container}>
        <h5 className={css.title}>
          {lesson_section.name} - {lesson_section.section_type}
        </h5>

        <div className={css.test}>
          {exams.map((val, i) => (
            <div className={css.question} key={`${val.question}${i}`}>
              {`${i + 1}. ${val.question}`}
              <div>
                {val.answer.map((val2, i2) => (
                  <div className={css.answer} key={`${val2.question}${i2}`}>
                    <input
                      type="checkbox"
                      value={val2.answer}
                      onChange={(e) => {
                        const exams1 = [...exams];
                        exams1[i].answer[i2].checked = e.target.checked;
                        setExams(exams1);
                      }}
                    />{" "}
                    {val2.answer}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={css.button} onClick={Clickhandler} >Шалгалтыг дуусгах</div>
      </div>
    </div>
  );
}
export default Exam;