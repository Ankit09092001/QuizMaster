import * as React from "react";
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
  const handleInputChange = (e) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  };
  const [myData , setMyData] = React.useState({})
  React.useEffect(() => {
    const getApiData = async () => {
      const res = await axios.get(
        `http://localhost:3300/studentlogin/${email.email}`
      );
      setMyData(res.data[0]);
    };

    getApiData();
  }, [email.email]);
  const handleSubmit = (e) => {
    e.preventDefault();

      if(myData){
        console.log("correct")
        navigate("/quiz", { state: { email: myData.email } });
      }
      else{
        alert("Wrong Email");
      }
    // setInterval(()=>{
    //     if(res.data){
    //         console.log("correct")
    //         console.log(res)
    //       }
    //       else{
    //           console.log("Incorrect")
    //       }
         
    // },1000) 
    setEmail({
        email:""
       }); 
   
}

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
          <MDBCardHeader>Enter your Email</MDBCardHeader>
          <MDBCardBody>
            <form onSubmit={handleSubmit}>
              <MDBInput
                id="form4Example1"
                wrapperClass="mb-4"
                //   label="Email"
                type="email"
                name="email"
                value={email.email}
                onChange={handleInputChange}
              />
              <MDBBtn type="submit">Submit</MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </Main>
    </Box>
  );
}
