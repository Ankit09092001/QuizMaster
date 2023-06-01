import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
// import TeacherLogin from './component/TeacherLogin';
import Home from './component/Home';
import Student from './Student/Student';
import StudentReport from './Student/Studentreport';
import Teacher from './TeacherPage/Teacher';
import StudentRegistration from './component/StudentRegistration';
import AddQuestion from './TeacherPage/NewQuestion';
import ViewQuestion from './TeacherPage/ViewQuestion';
import UpdateQuestion from './TeacherPage/UpdateQuestion';
import Quiz from './Student/Quiz';
import Admin from './Adminpage/Admin';
import Studentdetails from './Student/Studentdetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/studentregister" element={<StudentRegistration />} />
        <Route path='/adminpage' element={<Admin />} />
        <Route path='/addquestion' element={<AddQuestion />} />
        <Route path='/viewquestion' element={<ViewQuestion />} />
        <Route path='/updatequestion' element={<UpdateQuestion />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path="/studentpage" element={<Student />} />
        <Route path="/teacherpage" element={<Teacher />} />
        <Route path="/studentdetails" element={<Studentdetails />} />
        <Route path="/studentreport" element={<StudentReport />} />
      </Routes>
    </Router>
  );
}

export default App;
