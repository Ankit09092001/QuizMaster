import React, { useState } from "react";
// import "./Teacherpage.css";
import axios from "axios";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

const NewStudent = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const [student, setStudent] = useState({
    ID: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const response = axios.post("http://localhost:3300/teacherlogin/", student);
    console.log(response);
    setStudent({
      ID: "",
      email: "",
      password: "",
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
          value={student.ID}
          onChange={handleInputChange}
        />

        <MDBInput
          id="form4Example3"
          wrapperClass="mb-4"
          label="Email"
          type="email"
          name="email"
          value={student.email}
          onChange={handleInputChange}
        />

        <MDBInput
          id="form4Example4"
          wrapperClass="mb-4"
          label="Password"
          type="password"
          name="password"
          value={student.password}
          onChange={handleInputChange}
        />

        <MDBBtn type="submit">Submit</MDBBtn>
      </form>
    </div>
  );
};

export default NewStudent;
