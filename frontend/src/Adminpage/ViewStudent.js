import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

// import "./Teacherpage.css";

function Classroom() {
  const [showDetails, setShowDetails] = useState(false);
  const [myData, setMyData] = useState([]);
  const getApiData = async () => {
    const res = await axios.get("http://localhost:3300/studentlogin");
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
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {myData.map((student, index) => {
            const { ID, name, email, password } = student;
            return (
              <tr key={index}>
                <td>{ID}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{password}</td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default Classroom;
