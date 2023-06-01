import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
import { useLocation } from "react-router-dom";
function StudentReport() {
  const location = useLocation();
  const ID = location.state && location.state.ID;
  const [myData, setMyData] = useState([]);
  const getApiData = async () => {
    const res = await axios.get("http://localhost:3300/studentreport");
    setMyData(res.data[0]);
    console.log(myData);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="sreport">
      <h1> Student Report:</h1>
      {myData.length > 0 && (
        // <h1>{myData[ID-1].marks}</h1>
        
        <table >
        

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{myData[ID - 1].ID}</td>
              <td>{myData[ID - 1].name}</td>
              <td>{myData[ID - 1].marks}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentReport;
