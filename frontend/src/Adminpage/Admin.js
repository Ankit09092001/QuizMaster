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
import AddStudent from "./AddStudent";
import AddTeacher from "./AddTeacher";
import ViewStudent from "./ViewStudent";
import ViewTeacher from "./ViewTeacher";

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
  const [viewStudent, setViewStudent] = React.useState(false);
  const [addStudent, setAddStudent] = React.useState(false);
  const [addTeacher, setAddTeacher] = React.useState(false);
  const [viewTeacher, setViewTeacher] = React.useState(false);
  const [playground, setPlayground] = React.useState(true);
  function handleView() {
    setViewStudent(true);
    setAddStudent(false);
    setAddTeacher(false);
    setViewTeacher(false);
    setPlayground(false);
  }
  function handleAdd() {
    setViewStudent(false);
    setAddStudent(true);
    setAddTeacher(false);
    setViewTeacher(false);
    setPlayground(false);
  }
  function handleAddTeacher() {
    setViewStudent(false);
    setAddStudent(false);
    setAddTeacher(true);
    setViewTeacher(false);
    setPlayground(false);
  }
  function handleViewTeacher() {
    setViewStudent(false);
    setAddStudent(false);
    setAddTeacher(false);
    setViewTeacher(true);
    setPlayground(false);
  }
  function handlePlayground() {
    setViewStudent(false);
    setAddStudent(false);
    setAddTeacher(false);
    setViewTeacher(false);
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
                Admin
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
            <ListItemText primary="Add Student" onClick={handleAdd} />
          </ListItem>
          <Divider />
          <ListItem style={designcss} button>
            <ListItemText primary="View Student" onClick={handleView} />
          </ListItem>
          <Divider />

          <ListItem style={designcss} button>
            <ListItemText primary="Add Teacher" onClick={handleAddTeacher} />
          </ListItem>
          <Divider />

          <ListItem style={designcss} button>
            <ListItemText primary="View Teacher" onClick={handleViewTeacher} />
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
        {/* if(viewQuestion){<ViewQuestion />} */}
        {/* <HandleClick /> */}
        {playground && <Playground />}
        {addStudent && <AddStudent />}
        {addTeacher && <AddTeacher />}
        {viewStudent && <ViewStudent />}
        {viewTeacher && <ViewTeacher />}
      </Main>
    </Box>
  );
}
