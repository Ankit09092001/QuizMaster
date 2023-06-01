import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import "./Teacherpage.css";

function Classroom() {
    const [showDetails, setShowDetails] = useState(false);
    const [myData, setMyData] = useState([]);
  const getApiData = async () => {
    const res = await axios.get("http://localhost:3300/questionbank");
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
          </tr>
        </MDBTableHead>
        <MDBTableBody>
  
        {myData.map((student, index) => {
                const { ID, question} = student;
                return (
                  <tr key={index}>
                    <td>{ID}</td>
                    <td>{question}</td>
                  </tr>
                );
              })}
          
        </MDBTableBody>
      </MDBTable>
      </div>
    );
}

export default Classroom;
