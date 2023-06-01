import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./Teacherpage.css";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
function Classroom() {
    // const [showDetails, setShowDetails] = useState(false);
    const [myData, setMyData] = useState([]);
  const getApiData = async () => {
    const res = await axios.get("http://localhost:3300/studentreport");
    setMyData(res.data[0]);
  };

  useEffect(() => {
    getApiData();
  }, []);


  return (
    <div>
     <MDBTable  responsive >
        <MDBTableHead >
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
  
        {myData.map((student, index) => {
                const { ID,name,marks} = student;
                return (
                  <tr key={index}>
                    <td>{ID}</td>
                    <td>{name}</td>
                    <td>{marks}</td>
                    
                  </tr>
                );
              })}
          
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default Classroom;
