import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput
}
from 'mdb-react-ui-kit';
import './login.css';
import  { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentLogin() {
  const [student, setStudent] = useState({
    ID: "",
    email: "",
    password: "",
  });
  const [myData, setMyData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const getApiData = async () => {
      const res = await axios.get(
        `http://localhost:3300/studentlogin/${student.email}`
      );
      setMyData(res.data[0]);
    };

    getApiData();
  }, [student.email]);

  const [teacherData,setTeacherData] = useState({});

  useEffect(() => {
    const getApiData = async () => {
      const res = await axios.get(
        `http://localhost:3300/teacherlogin/${student.email}`
      );
      setTeacherData(res.data[0]);
    };

    getApiData();
  }, [student.email]);

  const [adminData,setAdminData] = useState({});
  useEffect(() => {
    const getApiData = async () => {
      const res = await axios.get(
        `http://localhost:3300/adminlogin/${student.email}`
      );
      setAdminData(res.data[0]);
    };

    getApiData();
  }, [student.email]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(myData)
    if(myData){
    if (myData.password === student.password) {
      navigate("/studentpage", { state: { email: myData.email } });
    } else {
      alert("Wrong Credentials");
      setStudent({
        email: "",
        password: "",
      });
    }
  }
  else if(teacherData){
    if(teacherData.password === student.password) {
      navigate("/teacherpage");
    } else {
      alert("Wrong Credentials");
      setStudent({
        email: "",
        password: "",
      });
    }
  }
  else if(adminData){
    if(adminData.password === student.password) {
      navigate("/adminpage");
    } else {
      alert("Wrong Credentials");
      setStudent({
        email: "",
        password: "",
      });
    }
  }
  else {
    alert("Wrong Credentials");
    setStudent({
      email: "",
      password: "",
    });
  }
  
  }

  return (
    <div className='lgform'>   
        <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='7'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone" />
        </MDBCol>

        <MDBCol col='4' md='4'>
         <form onSubmit={handleSubmit}>
         <div className='details'> 
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' name='email' value={student.email} onChange={handleChange} size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' name='password' value={student.password} onChange={handleChange} size="lg"/>
          </div>

          <MDBBtn className="mb-4 w-100" type='submit' size="lg">Sign in</MDBBtn>
          </form>
          

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
 
  );
}

export default StudentLogin;
