import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import "./Teacherpage.css";

function Classroom() {
    const [showDetails, setShowDetails] = useState(false);
    const [myData, setMyData] = useState([]);
  const getApiData = async () => {
    const res = await axios.get("http://localhost:3300/questions");
    setMyData(res.data[0]);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };

 
    return (
      <div className="table">
      <MDBTable responsive>
        <MDBTableHead>
          <tr>
            <th>ID</th>
            <th>Question</th>
            <th>Option 1</th>
            <th>Option 2</th>
            <th>Option 3</th>
            <th>Option 4</th>
            <th>Answer</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
  
        {myData.map((student, index) => {
                const { qid, question, op1, op2, op3, op4, answer} = student;
                return (
                  <tr key={index}>
                    <td>{qid}</td>
                    <td>{question}</td>
                    <td>{op1}</td>
                    <td>{op2}</td>
                    <td>{op3}</td>
                    <td>{op4}</td>
                    <td>{answer}</td>
                  </tr>
                );
              })}
          
        </MDBTableBody>
      </MDBTable>
      </div>
    );
}

export default Classroom;
