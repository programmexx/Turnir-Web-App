// import required packages
require("express-async-errors");
require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const { connectMongodb } = require("./database/mongoose");
const { rootRoute } = require("./middlewares/rootRoute");
const { notFound } = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

// middleware
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.set("trust proxy", 1);

// routes
// home route
app.get("/", rootRoute);
// auth route
const authRouter = require("./router/authRoute");
app.use("/api/auth", authRouter);

// not found
app.use(notFound);

// error Handle
app.use(errorHandler);

// Server and connect to database
const serveApp = async () => {
  try {
    await connectMongodb();
    let port = process.env.PORT || 3000;
    app.listen(port, () => console.log("App listening on port 3000"));
  } catch (error) {
    console.log(error);
  }
};
serveApp();
