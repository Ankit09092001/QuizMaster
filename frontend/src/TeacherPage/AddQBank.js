import React, { useState } from "react";
import "./Teacherpage.css";
import axios from "axios";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

const NewQuestion = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const [question, setQuestion] = useState({
    ID: "",
    question: "",
  });

  const handleInputChange = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const response = axios.post("http://localhost:3300/questionbank/", question);
    console.log(response);
    setQuestion({
      ID: "",
      question: "",
    });

    // Update the state with the new student
  };

  return (
    <div>
      <form className="teacherform" onSubmit={handleSubmit}>
        <MDBInput
          id="form4Example1"
          wrapperClass="mb-4"
          label="ID"
          type="number"
          name="ID"
          value={question.ID}
          onChange={handleInputChange}
        />

        <MDBInput
          id="form4Example2"
          wrapperClass="mb-4"
          label="Question"
          type="text"
          name="question"
          value={question.question}
          onChange={handleInputChange}
        />

        <MDBBtn type="submit">Submit</MDBBtn>
      </form>
    </div>
  );
};

export default NewQuestion;
