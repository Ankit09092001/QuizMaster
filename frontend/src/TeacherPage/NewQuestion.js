import React, { useState } from "react";
import "./Teacherpage.css";
import axios from "axios";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

const NewQuestion = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const [question, setQuestion] = useState({
    qid: "",
    question: "",
    op1: "",
    op2: "",
    op3: "",
    op4: "",
    answer: "",
  });

  const handleInputChange = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const response = axios.post("http://localhost:3300/questions/", question);
    console.log(response);
    setQuestion({
      qid: "",
      question: "",
      op1: "",
      op2: "",
      op3: "",
      op4: "",
      answer: "",
    });

    // Update the state with the new student
  };

  return (
    <div>
      <form className="teacherform" onSubmit={handleSubmit}>
        <MDBInput
          id="form4Example1"
          wrapperClass="mb-4"
          label="Qid"
          type="number"
          name="qid"
          value={question.qid}
          onChange={handleInputChange}
        />

        
          
          <MDBInput id='form4Example2' wrapperClass='mb-4'
            label="Question"
            type="text"
            name="question"
            value={question.question}
            onChange={handleInputChange}
          />
        
          <MDBInput id='form4Example3' wrapperClass='mb-4'
            label="Option 1"
            type="text"
            name="op1"
            value={question.op1}
            onChange={handleInputChange}
          />
        
          <MDBInput id='form4Example4' wrapperClass='mb-4'
            label="Option 2"
            type="text"
            name="op2"
            value={question.op2}
            onChange={handleInputChange}
          />
        
        
          <MDBInput id='form4Example5' wrapperClass='mb-4'
            label="Option 3"
            type="text"
            name="op3"
            value={question.op3}
            onChange={handleInputChange}
          />
       
        
          <MDBInput id='form4Example6' wrapperClass='mb-4'
            label="Option 4"
            type="text"
            name="op4"
            value={question.op4}
            onChange={handleInputChange}
          />
       
        
          <MDBInput id='form4Example7' wrapperClass='mb-4'
            label="Answer"
            type="text"
            name="answer"
            value={question.answer}
            onChange={handleInputChange}
          />
        
        <MDBBtn type="submit">Submit</MDBBtn>
      </form>
    </div>
  );
};

export default NewQuestion;
