import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import Playground from "./Playground";
import ListItemText from "@mui/material/ListItemText";
import ViewQB from "../TeacherPage/ViewQBank";
import StartQuiz from "./StartQuiz";
import { ThemeProvider, createTheme } from "@mui/material/styles";
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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const designcss = {
    padding: "15px 50px",
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
  const [startQuiz, setStartQuiz] = React.useState(false);
  const [viewQB, setViewQB] = React.useState(false);
  const [playground, setPlayground] = React.useState(true);
  function handleQuiz() {
    setStartQuiz(true);
    setViewQB(false);
    setPlayground(false);
  }
  function handleView() {
    setStartQuiz(false);
    setViewQB(true);
    setPlayground(false);
  }
  function handlePlayground() {
    setStartQuiz(false);
    setViewQB(false);
    setPlayground(true);
  }

  return (
    <Box style={boxcss} sx={{ display: "flex" }}>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <AppBar color="primary" position="fixed" open={open}>
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
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#2B2B2B",
            color: "white",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          {/* <ListItemText primary="Question Playground" /> */}
          <ListItem button>
            <ListItemText onClick={handlePlayground}>
              <Typography style={designcss} variant="body1" fontWeight="bold">
                Student
              </Typography>
            </ListItemText>
          </ListItem>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem style={designcss} button>
            <ListItemText primary="Start Quiz" onClick={handleQuiz} />
          </ListItem>
          <Divider />
          <ListItem style={designcss} button>
            <ListItemText primary="View Question Bank" onClick={handleView} />
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {playground && <Playground />}
        {viewQB && <ViewQB />}
        {startQuiz && <StartQuiz />}
      </Main>
    </Box>
  );
}
