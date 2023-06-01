import React, { useState } from "react";
import "./Teacherpage.css";
import axios from "axios";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

const NewQuestion = () => {
    const [displayForm, setDisplayForm] = useState(false);
  
    const [question, setQuestion] = useState({
      time:""
    });
  
    const handleInputChange = (e) => {
      setQuestion({
        ...question,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const response = axios.post("http://localhost:3300/quiztime/1", question);
      console.log(response);
      setQuestion({
        time:""
      });
  
      // Update the state with the new student
    };
  
    return (
      <div>
        <form className="teacherform" onSubmit={handleSubmit}>
          <MDBInput
            id="form4Example1"
            wrapperClass="mb-4"
            label="Time"
            type="number"
            name="time"
            value={question.time}
            onChange={handleInputChange}
          />
          
          <MDBBtn type="submit">Submit</MDBBtn>
        </form>
      </div>
    );
  };
  
  export default NewQuestion;
  