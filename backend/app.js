const express = require("express");
const morgan = require("morgan");
const studentloginRoutes = require("./api/routes/studentlogin");
const teacherloginRoutes = require("./api/routes/teacherlogin");
const adminloginRoutes = require("./api/routes/adminlogin");
const questionRoutes = require("./api/routes/questions");
const quiztimeRoutes = require("./api/routes/quiztime");
const questionbankRoutes = require("./api/routes/questionbank");
const studentreportRoutes = require('./api/routes/studentreport');
const bodyParser = require("body-parser");
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
app.use("/questionbank",questionbankRoutes);
app.use("/quiztime",quiztimeRoutes);
app.use("/studentlogin",studentloginRoutes);
app.use("/teacherlogin",teacherloginRoutes);
app.use("/questions",questionRoutes);
app.use("/studentreport",studentreportRoutes);
app.use("/adminlogin",adminloginRoutes);
// app.use("/quiztime",quiztimeRoutes);

module.exports = app;