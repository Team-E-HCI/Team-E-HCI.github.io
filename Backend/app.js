const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const connectDB = require("./config/connectDB");
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cookieParser = require("cookie-parser");

//load config
dotenv.config({ path: "./config/config.env" });

//passport config
require("./config/passportGoogle")(passport);

//connect Mongo
connectDB();

//assigned express into app
const app = express();
//body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//logging
app.use(morgan("dev"));

//Express Handlebars = buat nampilin hasil render
app.engine(
  ".hbs",
  handlebars({
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

//passport middleware initialized and session
app.use(passport.initialize());
app.use(passport.session());

//static foler
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/authManual"));

//PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT} `));
