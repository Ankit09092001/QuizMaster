import React, { useState } from "react";
// import "./student.css";
import axios from "axios";
// import { response } from "../../../Backend/app";
// import "./registration.css";
function StudentForm() {
 
//   const [showForm, setShowForm] = useState(false);
  
  const [student, setStudent] = useState({
    ID : "",
    name : "",
    email : "",
    password : ""
  });

 

  const handleInputChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit =  (e) => {
    e.preventDefault();
    
    const response =  axios.post(
      "http://localhost:3300/studentlogin/",
      student
    );
    console.log(response);
    setStudent({
        ID : "",
        name : "",
        email : "",
        password : ""
    });
    // Update the state with the new student
   
  };
  

  

  

  return (
    <div >
      
      
        <form className="reg" onSubmit={handleFormSubmit}>
          <label>
            ID:
            <input
              type="number"
              name="ID"
              value={student.ID}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            email:
            <input
              type="text"
              name="email"
              value={student.email}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            password:
            <input
              type="text"
              name="password"
              value={student.password}
              onChange={handleInputChange}
            />
          </label>
          <br />
          

          <br />
          <button type="submit">
            Submit
          </button>
        </form>
   
      
    </div>
  );
}

export default StudentForm;
