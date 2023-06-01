// import './login.css';
// function Home(){
//     return(
//         <div className='homepage'>
//             <h1 className='heading'>Select the Role:</h1>
//         <div className="homebutton">
//           <button><a href='/student'>Student</a></button>
//           <button><a href='/teacher'>Teacher</a></button>
//           <button><a href='/studentregister'>Student Register</a></button>
//         </div>
//         </div>
//     );
// }

// export default Home;

import React from "react";
import "./HomePage.css";
import quiz from "./images/quiz1.jpg";
import quiz1 from "./images/quiz.jpg";
import quiz2 from "./images/quiz2.jpg";

const HomePage = () => {
  return (
    <div className="homepage-container">
      
      <div className="homepage-header">
        <h1>Welcome to QuizMaster</h1>
        <button className="get-started-button">
          <a href="/login">Get Started</a>
        </button>
      </div>
      <div className="homepage-image-container">
        <img src={quiz} alt="quiz" className="homepage-image" />
        <img src={quiz1} alt="quiz2" className="homepage-image" />
        <img src={quiz2} alt="quiz3" className="homepage-image" />
      </div>
    </div>
  );
};

export default HomePage;
