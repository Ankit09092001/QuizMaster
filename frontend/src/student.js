// import { useLocation } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import Quiz from "./Quiz";
// function Student() {
//   const location = useLocation();
//   const [myData, setMyData] = useState("");

//   const getApiData = async () => {
//     const res = await axios.get("http://localhost:3300/questions");
//     setMyData(res.data[0]);
//   };

//   useEffect(() => {
//     getApiData();
//   }, []);

//   const email = location.state?.email;
//   return (
//     <div>
//       {myData &&
//         myData.map((quiz,index) => {
//           const {question , op1 ,op2 , op3 ,op4 , answer} = quiz;
//           return(
//           <form className="quizform" key={index}>
//             <h1>{question}</h1>
//             <div>
//               <input type="radio" name={question} value={op1}></input>
//               <label>{op1}</label>
//             </div>
//             <div>
//               <input type="radio" name={question} value={op2}></input>
//               <label>{op2}</label>
//             </div>
//             <div>
//               <input type="radio" name={question} value={op3}></input>
//               <label>{op3}</label>
//             </div>
//             <div>
//               <input type="radio" name={question} value={op4}></input>
//               <label>{op4}</label>
//             </div>
//           </form>
//           );
//         })}
//     </div>
//   );
// }

// export default Student;

import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Student() {

  const location = useLocation();
  const navigate=useNavigate();
  const { email } = location.state;
  // console.log(email)
  const [studentData, setStudentData] = useState([]);
  const [myData, setMyData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showNextQuestion, setShowNextQuestion] = useState(false);
  const [studentReport, setStudentReport] = useState({
    ID : "",
    name : "",
    marks : ""
  });
  const [marks,setMarks] = useState(0);
  const getApiData = async () => {
    const res = await axios.get("http://localhost:3300/questions");
    setMyData(res.data[0]);
  };

  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    const getStudentApiData = async () => {
      const res = await axios.get(
        `http://localhost:3300/studentlogin/${email}`
      );
      setStudentData(res.data[0]);
    };

    getStudentApiData();
  }, [email]);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
    setShowNextQuestion(true);
  };

const handleSubmit=() =>{
    studentReport.ID=studentData.ID;
    studentReport.name=studentData.name;
    studentReport.marks=marks;

    const response =  axios.post(
      "http://localhost:3300/studentreport/",
      studentReport
    );

    console.log(response)
    studentReport.ID=""
    studentReport.name="";
    studentReport.marks="";
    setMarks(0);
    navigate("/studentreport",  { state: { ID: studentData.ID } });
}

  const handleNextQuestionClick = () => {
    // Save the selected answer for the current question
    const currentQuestion = myData[currentQuestionIndex];
    currentQuestion.selectedAnswer = selectedAnswer;
    if(selectedAnswer===currentQuestion.answer){
      setMarks(marks+1)
    console.log(selectedAnswer); 
    console.log(studentData.name)
    }
  
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer("");
    setShowNextQuestion(false);
  };

  const currentQuestion = myData[currentQuestionIndex];

  return (
    <div>
      {myData.length > 0 && currentQuestionIndex<myData.length && (
        <form className="quizform">
          <h1>{currentQuestionIndex+1}) {currentQuestion.question}</h1>
          <div>
            <input
              type="radio"
              name="answer"
              value={currentQuestion.op1}
              checked={selectedAnswer === currentQuestion.op1}
              onChange={handleAnswerChange}
            />
            <label>{currentQuestion.op1}</label>
          </div>
          <div>
            <input
              type="radio"
              name="answer"
              value={currentQuestion.op2}
              checked={selectedAnswer === currentQuestion.op2}
              onChange={handleAnswerChange}
            />
            <label>{currentQuestion.op2}</label>
          </div>
          <div>
            <input
              type="radio"
              name="answer"
              value={currentQuestion.op3}
              checked={selectedAnswer === currentQuestion.op3}
              onChange={handleAnswerChange}
            />
            <label>{currentQuestion.op3}</label>
          </div>
          <div>
            <input
              type="radio"
              name="answer"
              value={currentQuestion.op4}
              checked={selectedAnswer === currentQuestion.op4}
              onChange={handleAnswerChange}
            />
            <label>{currentQuestion.op4}</label>
          </div>
          {showNextQuestion && currentQuestionIndex<myData.length-1 && (
            <button onClick={handleNextQuestionClick}>Next</button>
          )}
          {
          myData.length-1===currentQuestionIndex && (
          <button onClick={handleSubmit}>Submit</button>
        )
      }
        </form>
      )}
      
      {console.log(myData.length, "and", currentQuestionIndex)}
    </div>
  );
}

export default Student;

