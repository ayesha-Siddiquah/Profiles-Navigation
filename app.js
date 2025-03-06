"use strict";

const express = require("express");
const path = require("path");

const app = express();
const port = process.envPORT || 3003;

// load our routers
const indexRouter = require("./routers/indexRouter");
const profilesRouter = require("./routers/profilesRouter");
const apiRouter = require("./routers/apiRouter");

// tell Express where to find our templates (views)
app.set("views", path.join(__dirname, "views"));
// set the view engine to ejs
app.set("view engine", "ejs");

// import express-ejs-layouts
const expressLayouts = require("express-ejs-layouts");
// tell Express to use express-ejs-layouts
app.use(expressLayouts);
// Set the default layout
app.set("layout", "./layouts/full-width");

// Morgan Logging Middleware
const logger = require("morgan");
// Using logger as middleware, with 3 different output templates
app.use(logger("dev")); // method, path, status, time

// parse application/x-www-form-urlencoded
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Express.static middleware to make the public folder globally accessible
app.use(express.static("public"));

// index routes
app.use(indexRouter);

// profiles routes
app.use("/profiles", profilesRouter);

//api routes
app.use("/api", apiRouter);

// catch any unmatched routes
app.all("/*", (req, res) => {
  res.status(404).send("404: File Not Found");
});

// start listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
