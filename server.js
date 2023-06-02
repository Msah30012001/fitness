require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const connectDB = require("./db/connect");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { HTTPResponse500 } = require("./utils/responseMessage");

const PORT = process.env.PORT || 5000;

const publicPath = path.join(__dirname, "public");
const templatePath = path.join(__dirname, "templates/views");
const partialPath = path.join(__dirname, "templates/partials");
const configPath = path.join(__dirname, "config");
// const adminPartialPath = path.join(__dirname, "templates/partials/admin")

// to set the view engine
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

// mandatory middleware
app.use(express.static(publicPath));
app.use(express.static(configPath));
app.use("/uploads", express.static(__dirname + "/upload"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
    credentials: true,
  })
);
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000"); // replace with your client URL
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cookieParser());

// web route
const web_route = require("./routes/webRoute");

//web routing
app.use("/", web_route);

// // error handeling middleware

// app.use((error, req, res, next) => {
//   console.log(error);
//   res
//     .status(new HTTPResponse500().status)
//     .send(new HTTPResponse500(`Internal server error : ${error} `));
//   next();
// });

// server start

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(` Server is running ${PORT} `);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
