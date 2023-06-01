import * as React from "react";
import axios from "axios";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Playground from "./Playground";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
  MDBRadio,
} from "mdb-react-ui-kit";
import { MDBInput } from "mdbreact";
// import './Teacherpage.css'
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function PersistentDrawerLeft() {
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const mainpad = {
    paddingTop: "100px",
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });
  const boxcss = {
    backgroundColor: "#FFF4E0",
  };

  // ----------------------------------------------------
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state;
  // console.log(email)
  const [studentData, setStudentData] = useState([]);
  const [myData, setMyData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showNextQuestion, setShowNextQuestion] = useState(false);
  const [studentReport, setStudentReport] = useState({
    ID: "",
    name: "",
    marks: "",
  });
  const [quizTime,setQuizTime] = useState({});
  const getTimeData = async() => {
    const res = await axios.get("http://localhost:3300/quiztime");
    console.log(res.data[0]);
    setQuizTime(res.data[0]);
    
  };
  useEffect(() => {
    getTimeData();
  }, []);
  const [marks, setMarks] = useState(0);
  const getApiData = async () => {
    const res = await axios.get("http://localhost:3300/questions");
    setMyData(res.data[0]);
  };

  useEffect(() => {
    getApiData();
  }, []);
  

  useEffect(() => {
    const getStudentApiData = async () => {
      const res = await axios.get(
        `http://localhost:3300/studentlogin/${email}`
      );
      setStudentData(res.data[0]);
    };

    getStudentApiData();
  }, [email]);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
    setShowNextQuestion(true);
  };
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
var timer;
  useEffect(()=>{

    timer = setInterval(()=>{
       setSecond(second+1);
       
       if(minute === quizTime[0].time){
        handleSubmit();
       }
       if(second === 59){
        setMinute(minute+1);
        setSecond(0);
       }
    },1000)

   return ()=> clearInterval(timer);

  });

  const handleSubmit = () => {
    console.log(myData[currentQuestionIndex],"and",selectedAnswer)
    const currentQuestion = myData[currentQuestionIndex];
    // currentQuestion.selectedAnswer = selectedAnswer;
    if (selectedAnswer === currentQuestion.answer) {
      setMarks(marks + 1);
      console.log(selectedAnswer);
      console.log(studentData.name);
    }
    studentReport.ID = studentData.ID;
    studentReport.name = studentData.name;
    studentReport.marks = marks;

    const response = axios.post(
      "http://localhost:3300/studentreport/",
      studentReport
    );
     var result = studentReport.marks;
    console.log(response);
    studentReport.ID = "";
    studentReport.name = "";
    studentReport.marks = "";
    setMarks(0);
    navigate("/studentreport", { state: { mark : result } });
  };

  const handleNextQuestionClick = () => {
    // Save the selected answer for the current question
    const currentQuestion = myData[currentQuestionIndex];
    // currentQuestion.selectedAnswer = selectedAnswer;
    if (selectedAnswer === currentQuestion.answer) {
      setMarks(marks + 1);
      console.log(selectedAnswer);
      console.log(studentData.name);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer("");
    setShowNextQuestion(false);
  };

  const currentQuestion = myData[currentQuestionIndex];

  // -----------------------------------------------------

  return (
    <Box style={boxcss} sx={{ display: "flex" }}>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <AppBar color="primary" position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" noWrap component="div">
              QuizMaster
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>

      <Main style={mainpad} open={open}>
        <MDBCard>
          {myData.length > 0 && currentQuestionIndex < myData.length && (
            <form>
              <MDBCardHeader>
                
                {currentQuestionIndex + 1}) {currentQuestion.question}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <MDBBtn>{minute<10?"0"+minute:minute} : {second<10?"0"+second:second}</MDBBtn>
              </MDBCardHeader>
              <MDBCardBody>
                <div>
                  <MDBRadio
                    label={currentQuestion.op1}
                    name="answer"
                    value={currentQuestion.op1}
                    checked={selectedAnswer === currentQuestion.op1}
                    onChange={handleAnswerChange}
                  />
                </div>
                <div>
                  <MDBRadio
                    name="answer"
                    label={currentQuestion.op2}
                    value={currentQuestion.op2}
                    checked={selectedAnswer === currentQuestion.op2}
                    onChange={handleAnswerChange}
                  />
                </div>
                <div>
                  <MDBRadio
                    name="answer"
                    label={currentQuestion.op3}
                    value={currentQuestion.op3}
                    checked={selectedAnswer === currentQuestion.op3}
                    onChange={handleAnswerChange}
                  />
                </div>
                <div>
                  <MDBRadio
                    name="answer"
                    label={currentQuestion.op4}
                    value={currentQuestion.op4}
                    checked={selectedAnswer === currentQuestion.op4}
                    onChange={handleAnswerChange}
                  />
                </div>
                <br />
                {showNextQuestion &&
                  currentQuestionIndex < myData.length - 1 && (
                    <MDBBtn onClick={handleNextQuestionClick}>Next</MDBBtn>
                  )}
                {myData.length - 1 === currentQuestionIndex && (
                  <MDBBtn onClick={handleSubmit}>Submit</MDBBtn>
                )}
              </MDBCardBody>
            </form>
          )}

          {console.log(myData.length, "and", currentQuestionIndex)}
        </MDBCard>
      </Main>
    </Box>
  );
}
