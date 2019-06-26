const express = require("express");
const routes = require("./routes");
const db = require("./models");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("./config/passport");

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(cookieParser());
app.use(bodyParser());
app.use(passport.initialize());
app.use(passport.session());


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// We need to use sessions to keep track of our user's login status



db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});
  