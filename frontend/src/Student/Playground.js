import React from "react";
import Quiz from "./quiz11.webp";
import "../TeacherPage/Teacherpage.css";
export default function App() {
  const designcss = {
    color : 'black',
    fontSize : '20px'
  };
  return (
    <figure className="figure playgrd">
      <img
        // style={designcss}
        src={Quiz}
        className="figure-img img-fluid rounded  mb-3"
        alt="..."
      />
      <figcaption style={designcss} className="figure-caption">
        Welcome to QuizMaster, your ultimate destination for fun and engaging
        quizzes!<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We believe that learning should be enjoyable, and what better
        way to do that than by testing your knowledge and challenging yourself
        with our exciting quizzes? Whether you're a student, a trivia
        enthusiast, or just looking for a way to pass the time, QuizMaster has
        something for everyone. With a vast collection of categories ranging
        from history to pop culture, sports to science, and everything in
        between, QuizMaster offers a wide range of quizzes that cater to your
        interests. Our user-friendly platform is designed to make your
        experience seamless, whether you're playing alone or competing with
        friends. So what are you waiting for? Join QuizMaster today and become a
        part of our community of quiz lovers. With new quizzes added regularly,
        you'll always have a reason to come back for more. Let the games begin!
      </figcaption>
    </figure>
  );
}
