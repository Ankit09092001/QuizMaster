import * as React from "react";
import { useEffect } from "react";
import axios from "axios";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
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
  const [email, setEmail] = React.useState("");
  const location = useLocation();
  const mark = location.state && location.state.mark;
  console.log(mark)
//   console.log("ID:",ID)
  const navigate = useNavigate();
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

  const [myData, setMyData] = React.useState({});
//   const getApiData = async () => {
//     const res = await axios.get("http://localhost:3300/studentreport");
//     setMyData(res.data[0]);
//     // console.log(myData);
//   };

//   useEffect(() => {
    // getApiData();
//   }, []);
   function handleClick(){
    navigate('/')
   }
//    console.log(myData)
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
          <MDBCardHeader>Your Test is Submitted</MDBCardHeader>
          <MDBCardBody>
            <MDBCardHeader>Thankyou for Attending the Test</MDBCardHeader>
            <p className="fw-bold">Your score is {mark}</p>
            <p className="fw-normal">Click the below to button to LogOut</p>
            <br />
            <MDBBtn onClick={handleClick}>LogOut</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </Main>
    </Box>
  );
}
