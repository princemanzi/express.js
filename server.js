const express = require("express");

const App = express();

App.use (express.static("public"))
App.set("view engine", "ejs");
App.use(logger)

const userRouter = require("./routes/users");

App.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

App.listen(3000);
